/**
 * UnionApi.js
 */

import constants from "../resources/constants";
import {post} from '../utils/httpUtils'

// 获取所有联盟列表
export function getUnionList () {
  const url = constants.SUPNUEVO_TEST_BASE_URL + '/func//union/getSupnuevoBuyerUnionList';
  const body = {}

  return post(url ,body);
}

// 向表单添加数据
export function addDataToDataList (dataFrom) {
  const url = constants.SPORTS_HOT_BASE_URL + '/func/node/addMallTestGoodsinfo';
  const body = {
    dataForm:dataFrom
  }

  return post(url ,body);
}

// 从表单删除数据
export function deleteDataFromDataList (id) {
  const url = constants.SPORTS_HOT_BASE_URL + '/func/node/deleteMallTestGoodsinfo';
  const body = {
    id: id,
  }

  return post(url ,body);
}

// 编辑表单某数据
export function editDataInDataList (dataFrom) {
  const url = constants.SPORTS_HOT_BASE_URL + '/func/node/editMallTestGoodsinfo';
  const body = {
    dataForm: dataFrom,
  }

  return post(url ,body);
}

// 获取某个数据的详情信息
export function getDataDetailById (id) {
  const url = constants.SPORTS_HOT_BASE_URL + '/func/node/getMallTestGoodsinfoById';
  const body = {
    id: id,
  }

  return post(url ,body);
}
