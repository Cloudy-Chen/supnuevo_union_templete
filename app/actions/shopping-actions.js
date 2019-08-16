/**
 * shopping-actions.js
 */

import * as actions from "../actions/action-types";

export function getCartInfo(cartId) {
  return {
    type: actions.GET_CART_INFO,
    cartId: cartId,
  };
}

export function getCartInfoSuccess(cartIno) {
  return {
    type: actions.GET_CART_INFO_SUCCESS,
    cartInfo: cartInfo,
  };
}

export function getCartInfoFail(error) {
  return {
    type: actions.GET_CART_INFO_FAIL,
    error: error,
  };
}

export function setCartInfo(cartInfo) {
  return {
    type: actions.SET_CART_INFO,
    cartInfo: cartInfo,
  };
}

export function updateCartInfo(itemId, commodityId, amount, unionId) {
  return {
    type: actions.ADD_NOTIFICATION,
    itemId: itemId,
    commodityId: commodityId,
    amount: amount,
    unionId: unionId
  };
}
