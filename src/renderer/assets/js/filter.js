import Utils from './utils.js'

function singleFormat(str) {
  return str.toString().length === 1 ? ('0' + str) : str
}

function getYMD(time) {
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  return year + '-' + singleFormat(month) + '-' + singleFormat(date)
}

function getMD(time) {
  let month = time.getMonth() + 1
  let date = time.getDate()
  return singleFormat(month) + '-' + singleFormat(date)
}

function getHMS(time) {
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  return singleFormat(hours) + ':' + singleFormat(minutes) + ':' + singleFormat(seconds)
}

function getHM(time) {
  let hours = time.getHours()
  let minutes = time.getMinutes()
  return singleFormat(hours) + ':' + singleFormat(minutes)
}

function fromLocalTime(time) {
  let GTM_8 = ToolsApi.time.offset / 1000 / 60 // -480
  let date = new Date(time)
  let subMin = date.getTimezoneOffset() + GTM_8
  date.setMinutes(date.getMinutes() + subMin)
  return date
}

const nicknameList = [{
  name: 'BTC',
  title: '比特币',
  symbol: '฿'
},
{
  name: 'LTC',
  title: '莱特币',
  symbol: 'Ł'
},
{
  name: 'BCH',
  title: '比特现金',
  symbol: 'BCH'
},
{
  name: 'ETH',
  title: '以太坊',
  symbol: 'E'
},
{
  name: 'DASH',
  title: '达世币',
  symbol: 'D'
}
]

const statusArr = ['提币失败', '等待处理', '提币成功', '提币取消', '等待邮件确认', '处理中']

const Filter = {
  coinStatus(satus) {
    return statusArr[satus]
  },
  getAccountNickname: (name, key) => {
    if (!name) return name
    let info = nicknameList.filter(item => {
      return item.name === name
    })[0]
    return info && info[key || 'title']
  },
  // 三位加逗号
  numberFormat(num) {
    if (num) {
      let [num1, num2] = num.toString().split('.')
      num1 = num1.split('').reverse().map((item, index) => {
        return (index) % 3 || !index || item === '-' || item === '+' ? item : item + ','
      }).reverse().join('')
      num2 ? num = num1 + '.' + num2 : num = num1
    }
    return num
  },
  // K M 处理
  numberFormatKM(number, index) {
    let num = Number(number)
    let res
    let tmp
    if (num / 1000 >= 1) {
      if (num / 1000000 >= 1) {
        // console.log('M')
        tmp = num / 1000000
        res = Utils.splitFormat(tmp, index) + 'M'
      } else {
        // console.log('K')
        tmp = num / 1000
        res = Utils.splitFormat(tmp, index) + 'K'
      }
    } else {
      res = Utils.splitFormat(num, index)
    }
    return res
  },
  splitFormat(num, fractionDigits) {
    return Utils.splitFormat(num, fractionDigits)
  },
  timeFormat(time, type) {
    let GTM_8 = 480 // -480
    let date = new Date(time)
    let subMin = date.getTimezoneOffset() + GTM_8
    date.setMinutes(date.getMinutes() + subMin)
    if (!type) return getYMD(date) + ' ' + getHMS(date)
    switch (type) {
      case 'HMS':
        return getHMS(date)
      case 'YMD':
        return getYMD(date)
    }
  },
  editE(num) {
    return Utils.deepFn.editE(num)
  },
  reRepeatArr(arr, key) {
    return Utils.reRepeatArr(arr, key)
  },
  getDate: (now) => {
    if (!now) {
      return now
    }
    // console.log(fromLocalTime(now))
    let time = fromLocalTime(now)
    // new Date(localTime.getLocalTime(now))
    return getYMD(time) + ' ' + getHMS(time)
  },
  // 获取月日
  getDateMD(now) {
    if (!now) {
      return now
    }
    // console.log(fromLocalTime(now))
    let time = fromLocalTime(now)
    // new Date(localTime.getLocalTime(now))
    return getMD(time) + ' ' + getHMS(time)
  },
  // 获取年月日时分
  getDateYMDHM(now) {
    if (!now) {
      return now
    }
    let time = fromLocalTime(now)
    return getYMD(time) + ' ' + getHM(time)
  },
  // transToObj
  toBool(num, obj) {
    num = num + ''
    return obj[num]
  }

}

export default Filter
