/**
 * shoppingReducer.js
 */
import * as actions from "../actions/action-types";
import constants from "../resources/constants";

export default function shoppingReducer(state, action = {}) {
    switch (action.type) {
        case actions.GET_CART_INFO_SUCCESS:
            return state.withMutations(state => state
                .set('dataResponse', constants.GET_CART_INFO_SUCCESS)
                .set('dataError', '')
                .set('cartInfo', action.cartInfo));
        case actions.GET_CART_INFO_FAIL:
            return state.withMutations(state => state
                .set('dataResponse', constants.GET_CART_INFO_FAIL)
                .set('dataError', action.error));
        case actions.GET_CART_INFO_SUCCESS:
            return state.withMutations(state => state
                .set('dataResponse', constants.GET_CART_INFO_SUCCESS)
                .set('dataError', '')
                .set('cartInfo', action.cartInfo));
        case actions.RESET_CART_INFO_RESPONSE:
            return state.withMutations(state => state
                .set('dataResponse', constants.INITIAL)
                .set('dataError', ''));
        case actions.SET_CART_INFO:
            return state.withMutations(state => state
                .set('cartInfo', action.cartInfo));
        default:
            return state
    }
}
