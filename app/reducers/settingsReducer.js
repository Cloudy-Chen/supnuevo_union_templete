/**
 * settingReducer.js
 */

import * as actions from "../actions/action-types";
import constants from '../resources/constants';

export default function settingsReducer(state, action = {}) {
  switch (action.type) {
    case actions.GET_RESULT_SUCCESS:
      return state.withMutations(state => state
          .set('resultList',action.resultList)
          .set('resultListResponse',constants.GET_RESULT_SUCCESS));
    case actions.GET_RESULT_FAIL:
      return state.withMutations(state => state
          .set('resultListResponse',constants.GET_RESULT_FAIL));
    case actions.RESET_RESULT_RESPONSE:
      return state.withMutations(state => state
          .set('resultListResponse',constants.INITIAL));
    case actions.RESET_SETTING:
      return state.withMutations(state => state
          .set('resultList',[])
          .set('resultListResponse',constants.INITIAL));
    default:
      return state
  }
}
