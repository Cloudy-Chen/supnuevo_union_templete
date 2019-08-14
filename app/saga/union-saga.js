/**
 * union-saga.js
 */

import {call, put, take, takeEvery} from "redux-saga/effects";
import * as actions from "../actions/action-types";
import * as Api from "../api/UnionApi";
import * as unionActions from "../actions/union-actions";
import strings from '../resources/strings';

// 获取联盟列表
function* getUnionList () {
  try {
    const response = yield call(Api.getUnionList);
    if (response.re == 1) {
      yield put(unionActions.getUnionListSuccess(response.data));
    } else {
      yield put(unionActions.getUnionListFail(strings.getUnionListFail));
    }
  } catch (error) {
    yield put(unionActions.getUnionListFail(error));
  }
}

// 获取联盟成员（超市）列表
function* getUnionMemberList (unionId) {
  try {
    const response = yield call(Api.getUnionMemberList, unionId);
    if (response.re == 1) {
      const merchants = response.data;
      yield put(unionActions.getUnionMemberListSuccess(merchants));
    } else {
      yield put(unionActions.getUnionMemberListFail(strings.getUnionMemberListFail));
    }
  } catch (error) {
    yield put(unionActions.getUnionMemberListFail(error));
  }
}

export default [
    takeEvery(actions.GET_UNION_LIST_ACTION,getUnionList),
]
