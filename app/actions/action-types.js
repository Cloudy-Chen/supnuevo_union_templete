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
export const SET_CUSTOMER_CART = "SET_CUSTOMER_CART"

// data
export const GET_DATAS_ACTION = "GET_DATAS_ACTION";
export const DATAS_REFRESHING = 'DATAS_REFRESHING';
export const DATAS_REFRESHING_NO_DATA = 'DATAS_REFRESHING_NO_DATA';
export const DATAS_LOADING = 'DATAS_LOADING';
export const DATAS_LOADING_NO_DATA = 'DATAS_LOADING_NO_DATA';
export const GET_DATAS_SUCCESS = 'GET_DATAS_SUCCESS';
export const GET_DATAS_FAIL = 'GET_DATAS_FAIL';
export const GET_MORE_DATAS_SUCCESS = 'GET_MORE_DATAS_SUCCESS';
export const GET_MORE_DATAS_FAIL = 'GET_MORE_DATAS_FAIL';

export const GET_DATA_DETAIL_ACTION = "GET_DATA_DETAIL_ACTION";
export const GET_DATA_DETAIL_SUCCESS = "GET_DATA_DETAIL_SUCCESS";
export const GET_DATA_DETAIL_FAIL = "GET_DATA_DETAIL_FAIL";

export const ADD_DATA_ACTION = "ADD_DATA_ACTION";
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";
export const ADD_DATA_FAIL = "ADD_DATA_FAIL";

export const EDIT_DATA_ACTION = "EDIT_DATA_ACTION";
export const EDIT_DATA_SUCCESS = "EDIT_DATA_SUCCESS";
export const EDIT_DATA_FAIL = "EDIT_DATA_FAIL";

export const DELETE_DATA_ACTION = "DELETE_DATA_ACTION";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAIL = "DELETE_DATA_FAIL";

export const RESET_DATA = "RESET_DATA";

export const RESET_RESPONSE = "RESET_RESPONSE";

// notification
export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const RESET_NOTIFICATION = "RESET_NOTIFICATION";

// settings
export const GET_COMMODITY_ACTION = "GET_COMMODITY_ACTION";
export const GET_ANSWER_ACTION = "GET_ANSWER_ACTION";
export const GET_RESULT_SUCCESS = "GET_RESULT_SUCCESS";
export const GET_RESULT_FAIL = "GET_RESULT_FAIL";
export const RESET_RESULT_RESPONSE = "RESET_RESULT_RESPONSE";
export const RESET_SETTING = "RESET_SETTING";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const RESET_MESSAGE = "RESET_MESSAGE";

// union
export const GET_UNION_LIST_ACTION = "GET_UNION_LIST_ACTION";
export const GET_UNION_LIST_SUCCESS = "GET_UNION_LIST_SUCCESS";
export const GET_UNION_LIST_FAIL = "GET_UNION_LIST_FAIL";
export const RESET_UNION_RESPONSE = "RESET_UNION_RESPONSE";
export const SET_UNION = "SET_UNION";
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
