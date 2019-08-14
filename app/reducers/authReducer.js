/**
 * authReducer.js
 */

import * as actions from "../actions/action-types";

export default function authReducer(state, action = {}) {
  switch (action.type) {
    case actions.LOGIN_ERROR:
      return state.withMutations(state => state
          .set('isLoggedIn', false)
          .set('loginError', action.error));
    case actions.LOGIN_SUCCESS:
      return state.withMutations(state => state
          .set('isLoggedIn', true)
          .set('loginError', '')
          .set('sessionId', action.sessionId)
          .set('username', action.username)
          .set('password', action.password)
          .set('customerInfo', action.customerInfo));
    case actions.REGISTER_ERROR:
      return state.withMutations(state => state
          .set('isRegisterSuccess', false)
          .set('registerError', action.error));
    case actions.REGISTER_SUCCESS:
      return state.withMutations(state => state
          .set('isRegisterSuccess', true)
          .set('registerError','')
          .set('username', action.username)
          .set('password', action.password));
    case actions.RESET_REGISTER_STATUS:
      return state.withMutations(state => state
          .set('isRegisterSuccess', false)
          .set('registerError',''));
    case actions.RESET_LOGIN_STATUS:
      return state.withMutations(state => state
          .set('loginError',''));
    case actions.LOGOUT_SUCCESS:
      return state.withMutations(state => state
          .set('isLoggedIn', false)
          .set('sessionId', '')
          .set('username', '')
          .set('password', ''));
    case actions.LOGOUT_ERROR:
      return state.withMutations(state => state
          .set('isLoggedIn', false)
          .set('loginError', action.error));
    case actions.RESET_AUTH:
      return state.withMutations(state => state
          .set('isLoggedIn', false)
          .set('loginError','')
          .set('registerState',false)
          .set('sessionId', '')
          .set('username', '')
          .set('password', ''));
    default:
      return state
  }
}
