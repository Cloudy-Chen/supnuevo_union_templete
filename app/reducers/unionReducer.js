/**
 * unionReducer.js
 */

import * as actions from "../actions/action-types";
import constants from '../resources/constants';

export default function unionReducer(state, action = {}) {
  switch (action.type) {
    case actions.GET_UNION_LIST_SUCCESS:
      return state.withMutations(state => state
          .set('dataResponse', constants.GET_UNION_LIST_SUCCESS)
          .set('dataError', '')
          .set('unions',action.unions));
    case actions.GET_UNION_LIST_FAIL:
      return state.withMutations(state => state
          .set('dataResponse', constants.GET_UNION_LIST_FAIL)
          .set('dataError', action.error));
    case actions.GET_UNION_MEMBER_LIST_SUCCESS:
      return state.withMutations(state => state
          .set('dataResponse', constants.GET_UNION_MEMBER_LIST_SUCCESS)
          .set('dataError', '')
          .set('merchants',action.merchants));
    case actions.GET_UNION_MEMBER_LIST_FAIL:
      return state.withMutations(state => state
          .set('dataResponse', constants.GET_UNION_MEMBER_LIST_FAIL)
          .set('dataError', action.error));
    case actions.RESET_UNION_RESPONSE:
      return state.withMutations(state => state
          .set('dataResponse', constants.INITIAL)
          .set('dataError', ''));
    case actions.SET_UNION:
      return state.withMutations(state => state
          .set('union', action.union));
    default:
      return state
  }
}
