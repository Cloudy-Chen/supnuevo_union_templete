/**
 * shopping-saga.js
 */

import {call, put, take, takeEvery} from "redux-saga/effects";
import * as actions from "../actions/action-types";
import * as Api from "../api/ShoppingApi";
import * as shoppingActions from "../actions/shopping-actions";
import strings from '../resources/strings';

// 获取购物车列表
function* getCustomerCartCommodityInfo (action) {
  const {cartId} = action;
  try {
    const response = yield call(Api.getCustomerCartCommodityInfo, cartId);
    if (response.re === 1) {
      const cartInfo = response.data;
      yield put(shoppingActions.getCartInfoSuccess(cartInfo));
    } else {
      yield put(shoppingActions.getCartInfoFail(strings.getCartInfoFail));
    }
  } catch (error) {
    yield put(shoppingActions.getCartInfoFail(error));
  }
}

// 更新购物车列表
function* updateCustomerCartCommodity (action) {
  const {itemId, commodityId, amount, unionId} = action;
  try {
    const response = yield call(Api.updateCustomerCartCommodity, itemId, commodityId, amount, unionId);
  } catch (error) {}
}

export default [
  takeEvery(actions.GET_CART_INFO, getCustomerCartCommodityInfo),
  takeEvery(actions.UPDATE_CART_INFO, updateCustomerCartCommodity),
]
