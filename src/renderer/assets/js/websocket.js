import ApiConfig from '../../../myConfig/api.config'

let tickerCallBack = null
let isConnection = false

class WebSocketUtil {
  constructor () {
    this.webSocket = null
    this.wsUrl = ApiConfig.webSocketURL
    this.lockReconnect = false // 避免重复连接
    this.isErrorCallBack = false
    this.ping = null
    this.errorCallBackFunArr = []
    this.isErrorCallBack = false
    this.timeout = 10000 // 10秒
    this.timeoutObj = null
    this.serverTimeoutObj = null
  }
  isConnection () {
    return isConnection
  }
  cancelConnection () {
    isConnection = false
  }
  addErrCallBackFun (callBack) {
    this.errorCallBackFunArr.push(callBack)
  }
  errorCallBackData () {
    if (!this.isErrorCallBack && this.errorCallBackFunArr.length) {
      this.isErrorCallBack = true
      for (let i = 0, len = this.errorCallBackFunArr.length; i < len; i++) {
        if ((typeof this.errorCallBackFunArr[i]) === 'function') {
          this.errorCallBackFunArr[i]()
        }
      }
    }
  }
  addTickerCallBack (callBack) {
    tickerCallBack = callBack
  }
  createWebSocket () {
    try {
      this.webSocket = new WebSocket(this.wsUrl)
      this.initEventHandle()
    } catch (e) {
      this.errorCallBackData()
      this.reconnect(this.wsUrl)
    }
  }
  initEventHandle () {
    this.webSocket.onclose = () => {
      clearInterval(this.ping)
      this.reconnect(this.wsUrl)
      this.errorCallBackData()
    }
    this.webSocket.onerror = () => {
      clearInterval(this.ping)
      this.reconnect(this.wsUrl)
      this.errorCallBackData()
    }
    this.webSocket.onopen = () => {
      isConnection = true
      this.isErrorCallBack = false
      clearInterval(this.ping)
      this.ping = setInterval(() => {
        this.webSocket.send("{'event':'ping'}")
      }, 10000)
      // 心跳检测重置
      this.reset().start()
    }
    this.webSocket.onmessage = (data) => {
      // 如果获取到消息，心跳检测重置
      // 拿到任何消息都说明当前连接是正常的
      this.reset().start()
      this.decodeData(data)
    }
  }
  webSocketSend (cmd) {
    if (!cmd) {
      return
    }
    if (!isConnection) {
      setTimeout(() => {
        this.webSocketSend(cmd)
      }, 200)
      return
    }
    this.webSocket.send(cmd)
  }
  reconnect (url) {
    isConnection = false
    if (this.lockReconnect) {
      return
    }
    this.lockReconnect = true
    // 没连接上会一直重连，设置延迟避免请求过多
    setTimeout(() => {
      this.createWebSocket(url)
      this.lockReconnect = false
    }, 2000)
  }
  reset () {
    clearTimeout(this.timeoutObj)
    clearTimeout(this.serverTimeoutObj)
    return this
  }
  start () {
    this.timeoutObj = setTimeout(() => {
      // 这里发送一个心跳，后端收到后，返回一个心跳消息
      // onmessage拿到返回的心跳就说明连接正常
      this.webSocket.send("{'event':'ping'}")
      this.serverTimeoutObj = setTimeout(() => { // 如果超过一定时间还没重置，说明后端主动断开了
        this.webSocket.close() // 如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, this.timeout)
    }, this.timeout)
  }
  decodeData (data) {
    if (data.data instanceof Blob) {
      let blob = data.data
      // js中的blob没有没有直接读出其数据的方法，通过FileReader来读取相关数据
      let reader = new FileReader()
      reader.readAsArrayBuffer(blob)
      // 当读取操作成功完成时调用.
      reader.onload = (evt) => {
        if (evt.target.readyState === FileReader.DONE) {
          let result = new Uint8Array(evt.target.result)
          result = (new window.Zlib.RawInflate(result)).decompress()
          let strResult = ''
          let length = result.length
          for (let i = 0; i < length; i++) {
            strResult += String.fromCharCode(result[i])
          }
          this.callBackData(JSON.parse(strResult))
        }
      }
      return
    }
    let d = JSON.parse(data.data)
    if (d.code === '10010') {
      let dt = {}
      Object.assign(dt, d)
      delete dt.code
      delete dt.msg
      setTimeout(() => {
        this.webSocket.send(JSON.stringify(dt))
      }, 2000)
      return
    }
    this.callBackData(JSON.parse(data.data))
  }
  callBackData (data) {
    if (data instanceof Array) {
      for (let i = 0; i < data.length; i++) {
        this.doCallback(data[i])
      }
    } else if (data instanceof Object) {
      if (data.hasOwnProperty('event') && data.event === 'pong') {
        return
      }
      this.doCallback(data)
    }
  }
  doCallback (data) {
    if (data.data) {
      switch (data.type) {
        case 'TICKER': tickerCallBack(data.data)
          break
      }
    }
  }
}

export default WebSocketUtil
