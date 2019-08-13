/**
 * 应用需要访问的所有常量
 */

export default {
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  SUCCESS:'SUCCESS',
  FAIL:'FAIL',
  INITIAL: '',

  // URL
  SUPNUEVO_BASE_URL: 'http://www.supnuevo.com.ar:8080',
  SUPNUEVO_VENTAS_BASE_URL: 'http://Supnuevo-ventas.com.ar:8080',
  SPORTS_HOT_BASE_URL: 'http://114.215.99.2',

  SUPNUEVO_TEST_BASE_URL: 'http://10.27.215.54:8080/supnuevo',
  SUPNUEVO_VENTAS_TEST_BASE_URL: 'http://10.27.215.54:8080/supnuevo_ventas',
  SPORTS_HOT_TEST_BASE_URL: 'http://localhost:8080/badmintonhot',

  // STACK
  Title_UnionList: "逛店",

  // CHART
  ADRESS_DROP_DOWN : ['中国','日本','美国'],
  TIME_DROP_DOWN : ['1月','2月','3月'],
  TYPE_DROP_DOWN : ['食物','服饰','生活'],

  // MAP
  BAIDU_MAP: "百度地图",
  BING_MAP: "微软地图",

  // SETTING
  GET_RESULT_SUCCESS: "GET_RESULT_SUCCESS",
  GET_RESULT_FAIL: "GET_RESULT_FAIL",

  // AI
  AI_COMMODITY: 1,
  AI_ANSWER: 2,
  TYPE_COMMODITY: '商品检索',
  TYPE_ANSWER: '智能问答',
  ANSWER_ROBOT: 'ROBOT',
  ROBOT_HELLO: "您好，我是您的问答机器人，请问您有什么问题？",

  deliverAddressList : ['中国','日本','美国'],
  pickMobileList : ['123','456','789'],
  pickNameList : ['Adam','Sam','Tony'],

  // ORDER
  cartHeaderList:['商品名称','数量','价格','小计'],
  discountHeaderList:['商品名称','购买数量','减免小计'],

  // RULE
  rule:"北部第一网店\n\n本店最低购买量为实际购买金额不小于2000 peso\n\n折扣商品不大于总够买辆的50%\n\n不承诺一定送货上门\n\n非超市开门时间提货，一定要预约\n\n"
}
