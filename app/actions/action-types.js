/**
 * action-types.js
 */

//root
export const SET_LOADING = "SET_LOADING";

// auth
export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";
export const REGISTER_ACTION = "REGISTER_ACTION";
export const LOGIN_SUCCESS = "LOGIN_SUCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const RESET_AUTH = "RESET_AUTH";
export const RESET_REGISTER_STATUS = "RESET_REGISTER_STATUS";
export const RESET_LOGIN_STATUS = "RESET_LOGIN_STATUS";
export const SET_CUSTOMER_CART = "SET_CUSTOMER_CART";
export const ADD_RECEIVER_INFO = "ADD_RECEIVER_INFO";
export const ADD_RECEIVER_INFO_SUCCESS = "ADD_RECEIVER_INFO_SUCCESS";
export const ADD_RECEIVER_INFO_FAIL = "ADD_RECEIVER_INFO_FAIL";
export const RESET_AUTH_RESPONSE = "RESET_AUTH_RESPONSE";

// union
export const GET_UNION_LIST_ACTION = "GET_UNION_LIST_ACTION";
export const GET_UNION_LIST_SUCCESS = "GET_UNION_LIST_SUCCESS";
export const GET_UNION_LIST_FAIL = "GET_UNION_LIST_FAIL";
export const RESET_UNION_RESPONSE = "RESET_UNION_RESPONSE";
export const SET_DEFAULT_UNION_AND_MERCHANT = "SET_DEFAULT_UNION_AND_MERCHANT";
export const GET_UNION_MEMBER_LIST_ACTION = "GET_UNION_MEMBER_LIST_ACTION";
export const GET_UNION_MEMBER_LIST_SUCCESS = "GET_UNION_MEMBER_LIST_SUCCESS";
export const GET_UNION_MEMBER_LIST_FAIL = "GET_UNION_MEMBER_LIST_FAIL";
export const SET_DEFAULT_MERCHANT = "SET_DEFAULT_MERCHANT";

export const GET_ADVERTISEMENT_LIST = "GET_ADVERTISEMENT_LIST";
export const GET_ADVERTISEMENT_LIST_SUCCESS = "GET_ADVERTISEMENT_LIST_SUCCESS";
export const GET_ADVERTISEMENT_LIST_FAIL = "GET_ADVERTISEMENT_LIST_FAIL";
export const ADVERTISEMENT_LIST_REFRESHING = "ADVERTISEMENT_LIST_REFRESHING";
export const ADVERTISEMENT_LIST_REFRESHING_NO_DATA = "ADVERTISEMENT_LIST_NO_DATA";
export const ADVERTISEMENT_LIST_LOADING = "ADVERTISEMENT_LIST_LOADING";
export const ADVERTISEMENT_LIST_LOADING_NO_DATA = "ADVERTISEMENT_LIST_LOADING_NO_DATA";
export const GET_MORE_ADVERTISEMENT_LIST_SUCCESS = "GET_MORE_ADVERTISEMENT_LIST_SUCCESS";
export const GET_MORE_ADVERTISEMENT_LIST_FAIL = "GET_MORE_ADVERTISEMENT_LIST_FAIL";

export const GET_PRICE_LIST = "GET_PRICE_LIST";
export const GET_PRICE_LIST_SUCCESS = "GET_PRICE_LIST_SUCCESS";
export const GET_PRICE_LIST_FAIL = "GET_PRICE_LIST_FAIL";
export const PRICE_LIST_REFRESHING = "PRICE_LIST_REFRESHING";
export const PRICE_LIST_REFRESHING_NO_DATA = "PRICE_LIST_REFRESHING_NO_DATA";
export const PRICE_LIST_LOADING = "PRICE_LIST_LOADING";
export const PRICE_LIST_LOADING_NO_DATA = "PRICE_LIST_LOADING_NO_DATA";
export const GET_MORE_PRICE_LIST_SUCCESS = "GET_MORE_PRICE_LIST_SUCCESS";
export const GET_MORE_PRICE_LIST_FAIL = "GET_MORE_PRICE_LIST_FAIL";

export const GET_PRICE_LIST_LUCENE = "GET_PRICE_LIST_LUCENE";
export const GET_PRICE_LIST_LUCENE_SUCCESS = "GET_PRICE_LIST_LUCENE_SUCCESS";
export const GET_PRICE_LIST_LUCENE_FAIL = "GET_PRICE_LIST_LUCENE_FAIL";

// shopping
export const GET_CART_INFO = "GET_CART_INFO";
export const GET_CART_INFO_SUCCESS = "GET_CART_INFO_SUCCESS";
export const GET_CART_INFO_FAIL = "GET_CART_INFO_FAIL";
export const UPDATE_CART_INFO = "UPDATE_CART_INFO";
export const UPDATE_CART_INFO_SUCCESS = "UPDATE_CART_INFO_SUCCESS";
export const UPDATE_CART_INFO_FAIL = "UPDATE_CART_INFO_FAIL";
export const SET_CART_INFO = "SET_CART_INFO";
export const RESET_SHOPPING_RESPONSE = "RESET_SHOPPING_RESPONSE";

// order
export const GET_PREV_ORDER = "GET_PREV_ORDER";
export const GET_PREV_ORDER_SUCCESS = "GET_PREV_ORDER_SUCCESS";
export const GET_PREV_ORDER_FAIL = "GET_PREV_ORDER_FAIL";
export const GET_ORDER_LSIT = "GET_ORDER_LSIT";
export const GET_ORDER_LIST_SUCCESS = "GET_ORDER_LIST_SUCCESS";
export const GET_ORDER_LIST_FAIL = "GET_ORDER_LIST_FAIL";
export const SUBMIT_ORDER_INFO = "SUBMIT_ORDER_INFO";
export const SUBMIT_ORDER_INFO_SUCCESS = "SUBMIT_ORDER_INFO_SUCCESS";
export const SUBMIT_ORDER_INFO_FAIL = "SUBMIT_ORDER_INFO_FAIL";
export const RESET_ORDER_RESPONSE = "RESET_ORDER_RESPONSE";
