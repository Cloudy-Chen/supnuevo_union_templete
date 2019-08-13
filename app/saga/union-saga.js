/**
 * data-saga.js
 */

import {call, put, take, takeEvery} from "redux-saga/effects";
import * as actions from "../actions/action-types";
import * as Api from "../api/UnionApi";
import * as unionActions from "../actions/union-actions";

// 获取联盟列表
function* getUnionList ( action ) {
  try {
    const response = yield call(Api.getUnionList, id);
    if (response.re ==1) {
      yield put(unionActions.setResponse(actions.GET_UNION_LIST_SUCCESS,response.data));
    } else {
      yield put(unionActions.setResponse(actions.GET_UNION_LIST_FAIL,null));
    }
  } catch (error) {
    yield put(unionActions.setResponse(actions.GET_UNION_LIST_FAIL,null));
  }
}

export default [
    takeEvery(actions.GET_UNION_LIST_ACTION,getUnionList),
]
