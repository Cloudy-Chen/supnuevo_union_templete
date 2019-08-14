/**
 * auth-action.js
 */

import * as actions from "../actions/action-types";

export function login(username, password) {
  return {
    type: actions.LOGIN_ACTION,
    username: username,
    password: password
  }
}

export function setLoginSuccess(sessionId, username, password, customerInfo) {
  return {
    type: actions.LOGIN_SUCCESS,
    sessionId: sessionId,
    username: username,
    password: password,
    customerInfo: customerInfo,
  }
}

export function setLoginError(error) {
  return {
    type: actions.LOGIN_ERROR,
    error: error
  }
}

export function resetLoginStatus() {
  return {
    type: actions.RESET_LOGIN_STATUS,
  }
}

export function register(username, telephone, password) {
  return {
    type: actions.REGISTER_ACTION,
    username: username,
    telephone: telephone,
    password: password
  }
}

export function setRegisterError(error) {
  return {
    type: actions.REGISTER_ERROR,
    error: error
  }
}

export function resetRegisterStatus() {
  return {
    type: actions.RESET_REGISTER_STATUS,
  }
}

export function setRegisterSuccess(username, password) {
  return {
    type: actions.REGISTER_SUCCESS,
    username: username,
    password: password,
  }
}

export function logout(authId, username, password) {
  return {
    type: actions.LOGOUT_ACTION,
    authId: authId,
    username: username,
    password: password
  }
}

export function setLogoutSuccess() {
  return {type: actions.LOGOUT_SUCCESS}
}

export function setLogoutError(error) {
  return {
    type: actions.LOGOUT_ERROR,
    error: error
  }
}

export function resetAuth(){
  return {
    type: actions.RESET_AUTH,
  }
}
