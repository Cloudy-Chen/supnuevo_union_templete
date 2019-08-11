/**
 * Strings.js
 */
import LocalizedStrings from "react-localization";

module.exports = new LocalizedStrings({
  en: {

    // common
    confirm: "确定",
    cancel: "取消",
    choose: "选择",
    back: "返回",

    // auth
    app_title: "Template",
    login_btn: "登录",
    login_validate_msg: "请将登录信息填写完整",
    login_success: "登录成功",
    login_fail: "登录失败",
    register_btn: "注册",
    register_validate_msg: "请将注册信息填写完整",
    register_success: "注册成功",
    register_fail: "注册失败",
    login_wait: "登录中,请稍候...",

    // form
    edit_btn: "修改",
    delete_btn: "删除",
    networking_error: "网络错误",
    retry: "点击重试",
    noData: "暂时没有相关数据",
    loadError: "点击重新加载",
    noMore: "已加载全部数据",
    loading: "数据加载中...",
    name: "名称",
    brief: "简介",
    price: "价格",
    updatetime: "上传时间",
    rubro: "类型",
    presentacion: "描述",
    marca: "品牌",
    tamano: "含量",
    codigo: "条形码",
    imgurls_intro: "商品图片",
    details_intro: "商品详情",
    action_choose: "请选择",
    ImagePicker_SelectTitle: "请选择图片",
    ImagePicker_ChooseFromLibrary: "从相册中选取",
    ImagePicker_TakePhoto: "拍照",
    getDataSuccess: '获取数据成功',
    getDataFail: '获取数据失败',
    getDataDetailSuccess: '获取详情成功',
    getDataDetailFail: '获取详情失败',
    addDataSuccess: '添加数据成功',
    addDataFail: '添加数据失败',
    deleteDataSuccess: '删除数据成功',
    deleteDataFail: '删除数据失败',
    editDataSuccess: '修改数据成功',
    editDataFail: '修改数据失败',
    nameIsNotEmpty: '姓名不为空',
    codigoIsNotEmpty: '条码不为空',
    priceIsNotEmpty: '价格不为空',

    //charts
    address: "地点",
    time: "时间",
    type: "类型",
    title_line_chart: "折线图统计",
    title_bar_chart: "柱状图统计",
    title_pie_chart: "饼状图统计",

    // alarm
    overSpeeding: "车辆超速",
    overTired: "疲劳驾驶",
    dangeous: "危险预警",
    cameraFault: "摄像头故障",
    driveTimeout: "当天累积驾驶超时",
    parkingOvertime: "超时停车",
    roadTimeout: "路段行驶时间/不足",
    roadFault: "路线偏离报警",
    vehicleOilException: "车辆油量异常",
    vehicleTheft: "车辆被盗",
    vehicleIllegalIgnition: "车辆非法点火",
    vehicleIllegalShift: "车辆非法位移",
    collisionWarning: "碰撞预警",
    rolloverWarning: "侧翻预警",
    illegalOpenDoor: "非法开门报警",
    isLocation: "未定位",
    speeding: "超速预警",
    tired: "疲劳预警",
    throughArea: "进入区域",
    throughRoad: "进入路线",
    vehicleOil: "车辆油路断开",
    vehicleCircut: "车辆电路断开",
    doorLock: "车门解锁",
    GPS:"未使用 GPS 卫星进行定位",
    beidou:"未使用北斗卫星进行定位",

    // AIServer
    getResultFail:"搜索数据失败",
  },
});
