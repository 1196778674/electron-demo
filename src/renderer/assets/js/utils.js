import bigdecimal from 'bigdecimal'

let Utils = {
  transReArr(arr) {
    return Array.from(new Set(arr))
  },
  // 处理Blob数据
  transData: (data, callback) => {
    let blob = data
    // js中的blob没有没有直接读出其数据的方法，通过FileReader来读取相关数据
    let reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    // 当读取操作成功完成时调用.
    reader.onload = function (evt) {
      if (evt.target.readyState === FileReader.DONE) {
        let result = new Uint8Array(evt.target.result)
        result = (new window.Zlib.RawInflate(result)).decompress()
        let strResult = ''
        let length = result.length
        for (let i = 0; i < length; i++) {
          strResult += String.fromCharCode(result[i])
        }
        callback(JSON.parse(strResult))
      }
    }
  },
  // 深copy
  deepCopy(obj) {
    if (!obj) return {}
    let newObj = obj.constructor === Array ? [] : {}
    for (let key in obj) {
      newObj[key] = (typeof obj[key] === 'object') ? this.deepCopy(obj[key]) : obj[key]
    }
    return newObj
  },
  // 加减乘除
  add(arg1, arg2) {
    let r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  },
  sub(arg1, arg2) {
    var r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length
    } catch (e) {
      r1 = 0
    }
    try {
      r2 = arg2.toString().split(".")[1].length
    } catch (e) {
      r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  mul(arg1, arg2) {
    if (!arg1 || !arg2) return;
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
      m += s2.split(".")[1].length
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  div(arg1, arg2) {
    if (!arg1) return '';
    if (!arg2) return '';
    var t1 = 0, t2 = 0, r1, r2;
    try {
      t1 = arg1.toString().split(".")[1].length
    } catch (e) {
    }
    try {
      t2 = arg2.toString().split(".")[1].length
    } catch (e) {
    }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
  },
  // 处理科学计数法
  editE(num) {
    //处理非数字
    if (isNaN(num)) { return num };

    //处理不需要转换的数字
    var str = '' + num;
    if (!/e/i.test(str)) { return num; };
    let tmp = new bigdecimal.BigDecimal(num).stripTrailingZeros().toPlainString()
    return tmp
  },
  // 根据key去重对象数组
  reRepeatArr(arr, key) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
      let newArr = []
      let obj = {}
      for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i][key]]) {
          newArr.push(arr[i])
          obj[arr[i][key]] = 1
        } else {
          continue
        }
      }
      return newArr
    } else {
      return []
    }
  },
  // 深度相关
  deepFn: {
    merge(data, type, deep, len, size = 3) {
      let order = []
      order.max = 0
      if (data && data.length && !type) {
        for (let i = 0; i < data.length; i++) {
          // 数组为空时，写入第一条数据
          if (!order.length) {
            order.push({
              price: this.formatDeep(data[i][0], deep),
              amount: Number(Number(data[i][1]).toFixed(size))
            })
          } else {
            // 判断该深度下，成交价是否与数组最后一条数据相同，相同则amount增加，不同则写入新数据
            if (this.formatDeep(data[i - 1][0], deep) === this.formatDeep(data[i][0], deep)) {
              order[order.length - 1].amount += Number(Number(data[i][1]).toFixed(size))
            } else {
              if (order.length < len) {
                order.push({
                  price: this.formatDeep(data[i][0], deep),
                  amount: Number(Number(data[i][1]).toFixed(size))
                })
              } else {
                break
              }
            }
          }
        }
        if (order.length) {
          order.forEach((info, i) => {
            if (Number(info.amount) > Number(order.max)) {
              order.max = info.amount
            }
            info.number = 0
            for (let k = i + 1; k--;) {
              info.number += order[k].amount
            }
          })
        }
        while (order.length < len) {
          order[order.length] = {}
        }
        return order
      } else if (data && data.length && type) {
        for (let i = data.length - 1; i >= 0; i--) {
          if (Number(this.formatDeep(data[i][0], deep)) === 0) {
            break
          }
          // 数组为空时，写入第一条数据
          if (!order.length) {
            order.push({
              price: this.formatDeep(data[i][0], deep, type),
              amount: Number(Number(data[i][1]).toFixed(size))
            })
          } else {
            // 判断该深度下，成交价是否与数组最后一条数据相同，相同则amount增加，不同则写入新数据
            if (this.formatDeep(data[i + 1][0], deep, type) === this.formatDeep(data[i][0], deep, type)) {
              order[order.length - 1].amount += Number(Number(data[i][1]).toFixed(size))
            } else {
              if (order.length < len) {
                order.push({
                  price: this.formatDeep(data[i][0], deep, type),
                  amount: Number(Number(data[i][1]).toFixed(size))
                })
              } else {
                break
              }
            }
          }
        }
        if (order.length) {
          order.forEach((info, i) => {
            if (Number(info.amount) > Number(order.max)) {
              order.max = info.amount
            }
            info.number = 0
            for (let k = i + 1; k--;) {
              info.number += order[k].amount
            }
          })
        }
        while (order.length < len) {
          order[order.length] = {}
        }
        return order
      } else {
        while (order.length < len) {
          order[order.length] = {}
        }
        return order
      }
    },
    formatDeep(num, deep, type) {
      let value = num
      if (type) {
        if (deep > 0) {
          value = Utils.splitFormat(num, deep)
          return value
        } else {
          return parseInt(value)
        }
      } else {
        let [intNum, precisionNum] = num.split('.')
        if (precisionNum && precisionNum.length > deep) {
          if (deep > 0) {
            precisionNum = precisionNum.substring(0, deep)
            value = intNum + '.' + precisionNum
            value = new bigdecimal.BigDecimal(value)
            let s = '0.'
            for (let i = 0; i < deep; i++) {
              if (i === deep - 1) {
                s = s + '1'
              } else {
                s = s + '0'
              }
            }
            s = new bigdecimal.BigDecimal(s)
            return value.add(s).toString()
          } else {
            return (Number(intNum) + 1).toString()
          }
        } else {
          return Utils.splitFormat(num, deep)
        }
      }
    },
    editE(num) {
      if (!num) return num
      num = num.toString()
      if (num.indexOf('e') === -1) { return num }
      let reg = /(?:(\d)+(?:.(\d+))?)[e]{1}-(\d)/.exec(num)
      if (!reg) {
        return num
      }
      let v = num
      if (reg[3] === '7') {
        v = '0.000000' + (reg[2] ? reg[1] + reg[2] : reg[1])
      } else {
        v = '0.0000000' + reg[1]
      }
      return v
    }
  },
  splitFormat(num, fractionDigits) {
    if (!fractionDigits) fractionDigits = 0
    if (isNaN(num)) return num
    if (num) {
      if (num === '0') {
        return num
      }
      if (fractionDigits === 0) {
        return parseInt(num)
      }
      if (num.toString().indexOf('.') > -1) {
        let digit = num.toString().split('.')
        if (digit[1].length < fractionDigits) {
          let digitResult = ''
          for (let i = 0; i < fractionDigits - digit[1].length; i++) {
            digitResult += '0'
          }
          return num + digitResult
        } else {
          let digitResult = digit[1].substring(0, fractionDigits)
          return digit[0] + '.' + digitResult
        }
      } else {
        let digitResult = '.'
        for (let i = 0; i < fractionDigits; i++) {
          digitResult += '0'
        }
        return num + digitResult
      }
    } else {
      return num
    }
  },
  /**
   * 防爆仓限制,如果超出限制则禁止下单,返回true 限制，false不限制 (具体规则查看12种情况文档)
   * id 合约id，positions 合约列表，balance 可用资金，price 委托价，amount 委托数量，value 乘数，index 指数价格，cost * mm 维持保证金，cost 净仓位价值，mm 维持保证金率，buy 买一， sell卖一
   * **/
  operateLimit(id, positions, orderType, side, balance, price, amount, value, taker, index, mm, cost, buy, sell) {
    buy = buy || 0
    sell = sell || 0
    let typeSide, // 净头寸方向 ，1同2反
      typeValue, // 净头寸值
      newBalance, // 新可用权益
      newDeposit, // 新维持保证金
      sellPosition = {}, // 空仓对象
      buyPosition = {}; // 多仓对象
    // 计算净头寸值和方向
    let positionCurrents = positions.filter(item => {
      return item.contractId.toString() === id.toString()
    })
    if (positionCurrents.length === 0) {
      typeSide = 1
      typeValue = 0
    } else if (positionCurrents.length === 1) {
      typeSide = positionCurrents[0].side === side ? 1 : 2
      typeValue = positionCurrents[0].entryPrice * positionCurrents[0].positionQty * taker
      if (typeSide === 1) {
        buyPosition = positionCurrents[0]
      } else {
        sellPosition = positionCurrents[0]
      }
    } else {
      let posSide;
      let a = positionCurrents[0].entryPrice * positionCurrents[0].positionQty * taker
      let b = positionCurrents[1].entryPrice * positionCurrents[1].positionQty * taker
      if (a === b) {
        typeSide = 1
      } else {
        posSide = a > b ? positionCurrents[0].side : positionCurrents[1].side
        typeSide = posSide === side ? 1 : 2
      }
      typeValue = Math.abs(a - b)
      if (positionCurrents[0].side === 1) {
        buyPosition = positionCurrents[0]
      } else {
        sellPosition = positionCurrents[0]
      }
      if (positionCurrents[1].side === 1) {
        buyPosition = positionCurrents[1]
      } else {
        sellPosition = positionCurrents[1]
      }
    }
    // 12种情况计算是否限制下单
    if (orderType === 1) {
      // 若此委托单为限价委托买单
      if (side === 1) {
        // 净头寸方向相同
        if (typeSide === 1) {
          newBalance = balance - 2 * price * amount * value * taker + (index - price) * amount * value
          newDeposit = cost * mm + price * amount * value * mm
          if (newBalance < newDeposit) {
            return true
          } else {
            return false
          }
        } else {
          // 净头寸方向相反
          // 若净头寸量大于等于该委托单量
          if (typeValue >= amount) {
            newBalance = balance - 2 * price * amount * value * taker + (index - price) * amount * value
            newDeposit = cost * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          } else {
            // 若净头寸量小于该委托单量
            let a = 0, b = 0;
            if (sellPosition.entryPrice) {
              a = sellPosition.entryPrice * sellPosition.positionQty * value * mm
            }
            if (buyPosition.entryPrice) {
              b = buyPosition.entryPrice * buyPosition.positionQty * value * mm
            }
            newBalance = balance - 2 * price * amount * value * taker + (index - price) * amount * value
            newDeposit = cost * mm - a + b + price * amount * value * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          }
        }
      } else {
        // 若该合约的净头寸方向和该委托单方向相同
        if (typeSide === 1) {
          newBalance = balance - 2 * price * amount * value * taker + (price - index) * amount * value
          newDeposit = cost * mm + price * amount * value * mm
          if (newBalance < newDeposit) {
            return true
          } else {
            return false
          }
        } else {
          // 若该合约的净头寸方向和该委托单方向相反
          if (typeValue >= amount) {
            newBalance = balance - 2 * price * amount * value * taker + (price - index) * amount * value
            newDeposit = cost * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          } else {
            let a = 0, b = 0;
            if (sellPosition.entryPrice) {
              a = sellPosition.entryPrice * sellPosition.positionQty * value * mm
            }
            if (buyPosition.entryPrice) {
              b = buyPosition.entryPrice * buyPosition.positionQty * value * mm
            }
            newBalance = balance - 2 * price * amount * value * taker + (price - index) * amount * value
            newDeposit = cost * mm - b + a + price * amount * value * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          }
        }
      }
    } else {
      // 若此委托单为市价委托买单
      if (side === 1) {
        // 若该合约的净头寸方向和该委托单方向相同
        if (typeSide === 1) {
          newBalance = balance - 2 * sell * amount * value * taker + (index - sell) * amount * value
          newDeposit = cost * mm + price * amount * value * mm
          if (newBalance < newDeposit) {
            return true
          } else {
            return false
          }
        } else {
          // 若该合约的净头寸方向和该委托单方向相反
          if (typeValue >= amount) {
            // 若净头寸量大于等于该委托单量
            newBalance = balance - 2 * sell * amount * value * taker + (index - sell) * amount * value
            newDeposit = cost * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          } else {
            // 若净头寸量小于该委托单量
            let a = 0, b = 0;
            if (sellPosition.entryPrice) {
              a = sellPosition.entryPrice * sellPosition.positionQty * value * mm
            }
            if (buyPosition.entryPrice) {
              b = buyPosition.entryPrice * buyPosition.positionQty * value * mm
            }
            newBalance = balance - 2 * sell * amount * value * taker + (index - sell) * amount * value
            newDeposit = cost * mm - a + b + sell * amount * value * mm
          }
        }
      } else {
        // 若此委托单为市价委托卖单
        if (typeSide === 1) {
          // 若该合约的净头寸方向和该委托单方向相同
          newBalance = balance - 2 * buy * amount * value * taker + (buy - index) * amount * value
          newDeposit = cost * mm + price * amount * value * mm
          if (newBalance < newDeposit) {
            return true
          } else {
            return false
          }
        } else {
          // 若该合约的净头寸方向和该委托单方向相反
          if (typeValue >= amount) {
            // 若净头寸量大于等于该委托单量
            newBalance = balance - 2 * buy * amount * value * taker + (buy - index) * amount * value
            newDeposit = cost * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          } else {
            // 若净头寸量小于该委托单量
            let a = 0, b = 0;
            if (sellPosition.entryPrice) {
              a = sellPosition.entryPrice * sellPosition.positionQty * value * mm
            }
            if (buyPosition.entryPrice) {
              b = buyPosition.entryPrice * buyPosition.positionQty * value * mm
            }
            newBalance = balance - 2 * buy * amount * value * taker + (buy - index) * amount * value
            newDeposit = cost * mm - b + a + buy * amount * value * mm
            if (newBalance < newDeposit) {
              return true
            } else {
              return false
            }
          }
        }
      }
    }
  }
}
export default Utils
