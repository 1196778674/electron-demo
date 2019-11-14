const domain = '58ex.com'
export default {
  // cookie domain
  domain,

  // href domain
  // 58coin
  mainDomain: `https://www.${domain}/`,
  // footer
  footerDomain: `https://footer.${domain}/`,
  // m站
  mDomain: `https://m.${domain}/`,
  // account 
  userDomain: `https://user.${domain}/`,
  // spot
  spotDomain: `https://spot.${domain}/`,
  // hash
  hashDomain: `https://hash.${domain}/`,
  // otc
  otcDomain: `https://c2c.${domain}/`,
  // swaps
  swapsDomain: `https://swap.${domain}/`,
  // labs
  labsDomain: `https://margin.${domain}/`,
  // loan
  loanDomain: `https://mortgageloan.${domain}/`,
  // usdt
  usdtDomain: `https://usdtfuture.${domain}/`,
  // regular
  regularDomain: `https://regularfuture.${domain}/`,
  // 算力
  powerDomain: `https://hashrate.${domain}/`,
  // api
  baseURL: `https://api.${domain}/`, // 58coin 58spot
  agentURL: `https://agentapi.${domain}/`,  //agent
  hashURL: `https://hashapi.${domain}/`, // hash
  otcURL: `https://c2capi.${domain}`, // otc
  webSocketURL: `wss://ws.${domain}:443/websocket`, // webSocket
  zendeskURL: `httpss://58coin-support.zendesk.com/`,
  oosImgUrl: `httpss://tianbi-test.oss-cn-beijing.aliyuncs.com/`,
  futureURL: `https://usdtfuture.${domain}/usdt/`,
  swapsURL: `https://swapapi.${domain}/` // 58swaps
}
