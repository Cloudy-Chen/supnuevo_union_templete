/**
 * UnionApi.js
 */

import constants from "../resources/constants";
import {post} from '../utils/httpUtils'

// 获取所有联盟列表
export function getUnionList () {
  const url = constants.SUPNUEVO_TEST_BASE_URL + '/func/union/getSupnuevoBuyerUnionList';
  const body = {};

  return post(url ,body);
}

// 获取所有联盟列表
export function getUnionMemberList (unionId) {
  const url = constants.SUPNUEVO_TEST_BASE_URL + '/func/union/getSupnuevoBuyerUnionMapInfo';
  const body = {
    unionId:unionId
  };

  return post(url ,body);
}
