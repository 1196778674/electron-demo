import Vue from 'vue'

let checkMsg = {
  verifyMobile: (mobile) => {
    if (!mobile) {
      return Vue.$dictionary.getPrompt('promptInformation.inputMobile')
    }
    if (!(/^1(([34578]\d{9}$)|(((99)|(98)|(66))\d{8}$))/.test(mobile))) {
      return Vue.$dictionary.getPrompt('promptInformation.mobileWrongFormat')
    }
    return ''
  },
  otherMobile: (mobile) => {
    if (!mobile) {
      return Vue.$dictionary.getPrompt('promptInformation.inputMobile')
    }
    if (!(/^\d{1,14}$/.test(mobile))) {
      return Vue.$dictionary.getPrompt('promptInformation.mobileWrongFormat')
    }
    return ''
  },
  verifyFirstPassword: (firstPassword) => {
    if (!firstPassword) {
      return Vue.$dictionary.getPrompt('promptInformation.inputPwd')
    }
    if (firstPassword.length < 8 || firstPassword.length > 20) {
      return Vue.$dictionary.getPrompt('promptInformation.enterPwd')
    }
    return ''
  },
  verifyNewPassword: (firstPassword, newPassword) => {
    if (!newPassword) {
      return Vue.$dictionary.getPrompt('promptInformation.confirmPwd')
    }
    if (firstPassword !== newPassword) {
      return Vue.$dictionary.getPrompt('promptInformation.reEnter')
    }
    return ''
  },
  verifyFirstFundPwd: (firstPassword) => {
    if (!firstPassword) {
      return Vue.$dictionary.getPrompt('promptInformation.fundPwd')
    }
    if (!(/^\d{6}$/.test(firstPassword))) {
      return Vue.$dictionary.getPrompt('promptInformation.sixFundsPassword')
    }
    return ''
  },
  verifyNewFundPwd: (firstPassword, newPassword) => {
    if (!newPassword) {
      return Vue.$dictionary.getPrompt('promptInformation.confirmFundPwd')
    }
    if (firstPassword !== newPassword) {
      return Vue.$dictionary.getPrompt('promptInformation.reEnter')
    }
    return ''
  },
  verifyPwdAndFirstPwd: (password, firstPassword) => {
    if (firstPassword === password) {
      return Vue.$dictionary.getPrompt('promptInformation.oldAndNewPwd')
    }
    return ''
  },
  verifyCode: (code) => {
    if (!code) {
      return Vue.$dictionary.getPrompt('promptInformation.inputCode')
    }
    if (code.length !== 6) {
      return Vue.$dictionary.getPrompt('promptInformation.inputNumberCode')
    }
    return ''
  },
  verifyTwiceCode: (twiceMobileAuth, code) => {
    if (twiceMobileAuth && !code) {
      return Vue.$dictionary.getPrompt('promptInformation.inputCode')
    }
    if (twiceMobileAuth && !(/^\d{6}$/.test(code))) {
      return Vue.$dictionary.getPrompt('promptInformation.inputNumberCode')
    }
    if (twiceMobileAuth) {
      return ''
    }
  },
  verifyGoogleCode: (googleCode) => {
    if (!googleCode) {
      return Vue.$dictionary.getPrompt('promptInformation.inputGoogle')
    }
    if (!(/^\d{6}$/.test(googleCode))) {
      return Vue.$dictionary.getPrompt('promptInformation.inputSixGoogle')
    }
    return ''
  },
  verifyTwiceGoogleCode: (twiceGoogleAuth, googleCode) => {
    if (twiceGoogleAuth && !googleCode) {
      return Vue.$dictionary.getPrompt('promptInformation.inputGoogle')
    }
    if (twiceGoogleAuth && !(/^\d{6}$/.test(googleCode))) {
      return Vue.$dictionary.getPrompt('promptInformation.inputSixGoogle')
    }
    if (twiceGoogleAuth) {
      return ''
    }
  },
  verifyNewGoogleCode: (newGoogleCode) => {
    if (!newGoogleCode) {
      return Vue.$dictionary.getPrompt('promptInformation.inputNewGoogle')
    }
    if (!(/^\d{6}$/.test(newGoogleCode))) {
      return Vue.$dictionary.getPrompt('promptInformation.inputSixGoogle')
    }
    return ''
  },
  verifyEmail: (email) => {
    if (!email) {
      return Vue.$dictionary.getPrompt('promptInformation.inputEmail')
    }
    if (!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email))) {
      return Vue.$dictionary.getPrompt('promptInformation.inputEmailFormat')
    }
    return ''
  },
  verifyAccount: (account) => {
    if (!account) {
      return Vue.$dictionary.getPrompt('promptInformation.resetAccount')
    } else if ((account.length <= 14) || (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(account))) {
      return ''
    } else {
      return Vue.$dictionary.getPrompt('promptInformation.mobileOrEmailFormat')
    }
  },
  verifyMobileAccount: (account) => {
    if (!account) {
      return Vue.$dictionary.getPrompt('promptInformation.loginAccount')
    } else if ((account.length <= 14) || (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(account))) {
      return ''
    } else {
      return Vue.$dictionary.getPrompt('promptInformation.mobileOrEmailFormat')
    }
  },
  verifyIdCard: (identityNo) => {
    if (!identityNo) {
      return Vue.$dictionary.getPrompt('promptInformation.inputIdNumber')
    }
    if (!(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(identityNo))) {
      return Vue.$dictionary.getPrompt('promptInformation.idNumberFormatError')
    }
    return ''
  },
  verifyLicenseNumber: (identityNo) => {
    if (!identityNo) {
      return Vue.$dictionary.getPrompt('promptInformation.licenseNumber')
    }
    if (!(/^[a-z0-9]+$/i).test(identityNo)) {
      return Vue.$dictionary.getPrompt('promptInformation.licenseNumberError')
    }
    return ''
  },
  verifyRealName: (realName) => {
    if (!realName) {
      return Vue.$dictionary.getPrompt('promptInformation.inputName')
    }
    return ''
  },
  checkHighAuth: (fileName, fileNameError) => {
    if (fileName && fileNameError) {
      return ''
    } else {
      return false
    }
  },
  verifyHighAuth: (fileNameOne, fileNameTwo, fileNameThree) => {
    // if (!fileNameOne || !fileNameTwo || !fileNameThree) {
    //   return '请先上传证件照！'
    // }
    if (!fileNameOne) {
      return Vue.$dictionary.getPrompt('promptInformation.firstIdPhoto')
    }
    if (!fileNameTwo) {
      return Vue.$dictionary.getPrompt('promptInformation.secondIdPhoto')
    }
    if (!fileNameThree) {
      return Vue.$dictionary.getPrompt('promptInformation.thirdIdPhoto')
    }
    return ''
  },
  verifyCheckOne: (checkedOne) => {
    if (!checkedOne) {
      return Vue.$dictionary.getPrompt('promptInformation.companyStatement')
    }
    return ''
  },
  verifyCheck: (checked) => {
    if (!checked) {
      return Vue.$dictionary.getPrompt('promptInformation.companyStatement')
    }
    return ''
  },
  verifyApiName: (apiName) => {
    if (!apiName) {
      return Vue.$dictionary.getPrompt('promptInformation.inputRemarks')
    }
    return ''
  },
  isIdCard: (cardid) => {
    // 身份证正则表达式(18位)
    let isIdCard2 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    let stard = '10X98765432' // 最后一位身份证的号码
    let first = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 1-17系数
    let sum = 0
    if (!isIdCard2.test(cardid)) {
      return false
    }
    let year = cardid.substr(6, 4)
    let month = cardid.substr(10, 2)
    let day = cardid.substr(12, 2)
    let birthday = cardid.substr(6, 8)
    // 校验日期是否合法
    if (birthday !== checkMsg.dateToString(new Date(year + '/' + month + '/' + day))) {
      return false
    }
    for (let i = 0; i < cardid.length - 1; i++) {
      sum += cardid[i] * first[i]
    }
    let result = sum % 11
    let last = stard[result] // 计算出来的最后一位身份证号码
    if (cardid[cardid.length - 1].toUpperCase() === last) {
      return true
    } else {
      return false
    }
  },
  // 日期转字符串 返回日期格式20080808
  dateToString: (date) => {
    if (date instanceof Date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      month = month < 10 ? '0' + month : month
      let day = date.getDate()
      day = day < 10 ? '0' + day : day
      return year.toString() + month.toString() + day.toString()
    }
    return ''
  },
  // 提现金额验证
  getMoneyVerity: (num, maxNum, highAuth, videoAuth) => {
    if (!num) return Vue.$dictionary.getPrompt('promptInformation.withdrawalAmount')
    if (!/^\d*(?:\.\d{0, 2})?$/.test(num)) {
      return Vue.$dictionary.getPrompt('promptInformation.twoDecimalPlaces')
    } else if (num < 100) {
      return Vue.$dictionary.getPrompt('promptInformation.minimumCash')
    } else if (num > maxNum) {
      return Vue.$dictionary.getPrompt('promptInformation.amountLimit')
    } else if (!highAuth) {
      return Vue.$dictionary.getPrompt('promptInformation.advancedCertification')
    } else if (num > 5000 && !videoAuth) {
      return Vue.$dictionary.getPrompt('promptInformation.videoCertification')
    } else {
      return ''
    }
  },
  // 验证资金密码
  moneyPwdVerity: (pwd) => {
    if (!pwd) {
      return Vue.$dictionary.getPrompt('promptInformation.fundPwd')
    }
    if (!(/^\d{6}$/.test(pwd))) {
      return Vue.$dictionary.getPrompt('promptInformation.fundPwdError')
    }
    return ''
  },
  // 验证数字
  numberVerity: (num) => {
    if (!num) {
      return Vue.$dictionary.getPrompt('promptInformation.inputNumber')
    }
    if (!/^\d*(?:\.\d{0, 2})?$/.test(num)) {
      return Vue.$dictionary.getPrompt('promptInformation.twoDecimalPlaces')
    }
    return ''
  },
  // 验证数字
  numberEightVerity: (value, num = 8) => {
    if (!value || !Number(value)) {
      return Vue.$dictionary.getPrompt('promptInformation.greaterThanZero')
    }
    let rg = new RegExp('^[0-9]{0, 8}([.]{1}[0-9]{0, " + num + "}){0, 1}$')
    if (!rg.test(value)) {
      return Vue.$dictionary.getPrompt('promptInformation.eightDecimals1') + num + Vue.$dictionary.getPrompt('promptInformation.eightDecimals2')
    }
    return ''
  },
  bankVerity: (num) => {
    if (!num) {
      return Vue.$dictionary.getPrompt('promptInformation.inputBankCard')
    }
    let odd = 0
    let even = 0
    let n = 0
    for (let i = num.length; i--;) {
      n = Number(num.slice(i, i + 1))
      if (isNaN(n)) {
        return Vue.$dictionary.getPrompt('promptInformation.bankCardError')
      }
      if ((num.length - i) % 2) {
        odd += n
      } else {
        n *= 2
        if (n.toString().length === 2) {
          n -= 9
        }
        even += n
      }
    }
    if ((odd + even) % 10) {
      return Vue.$dictionary.getPrompt('promptInformation.bankCardError')
    }
    return ''
  }
}

export default checkMsg
