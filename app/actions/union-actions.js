/**
 * union-actions.js
 */

import * as actions from "../actions/action-types";

export function getUnionList() {
  return {
    type: actions.GET_UNION_LIST_ACTION,
  };
}

export function setResponse(type,data) {
  return{
    type: type,
    data: data,
  }
};
