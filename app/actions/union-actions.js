/**
 * union-actions.js
 */

import * as actions from "../actions/action-types";

// 联盟列表
export function getUnionList() {
  return {
    type: actions.GET_UNION_LIST_ACTION,
  };
}

export function getUnionListSuccess(unions) {
  return {
    type: actions.GET_UNION_LIST_SUCCESS,
    unions: unions,
  }
}

export function getUnionListFail(error) {
  return {
    type: actions.GET_UNION_LIST_FAIL,
    error: error
  }
}

// 联盟
export function setUnion(union){
  return{
    type: actions.SET_UNION,
    union: union,
  }
}

// 联盟成员
export function getUnionMemberList(unionId) {
  return {
    type: actions.GET_UNION_MEMBER_LIST_ACTION,
    unionId:unionId
  };
}

export function getUnionMemberListSuccess(merchants) {
  return {
    type: actions.GET_UNION_LIST_SUCCESS,
    merchants: merchants,
  }
}

export function getUnionMemberListFail(error) {
  return {
    type: actions.GET_UNION_LIST_FAIL,
    error: error
  }
}

export function setUnionResponse(type,data) {
  return{
    type: type,
    data: data,
  }
}

export function resetUnionResponse() {
  return{
    type: actions.RESET_UNION_RESPONSE,
  }
}



