/**
 * configureStore.js
 */

import {autoRehydrate, persistStore} from "redux-persist-immutable";
import {combineReducers} from "redux-immutable";
import createActionBuffer from "redux-action-buffer";
import {REHYDRATE} from "redux-persist/constants";
import Immutable from "immutable";
import {applyMiddleware, compose, createStore} from "redux";
import {AsyncStorage} from "react-native";
import createSagaMiddleware from "redux-saga";

import saveSubsetFilter from '../utils/saveSubsetFilter'

import authReducer from "../reducers/authReducer";
import rootReducer from "../reducers/rootReducer";
import unionReducer from "../reducers/unionReducer";
import shoppingReducer from "../reducers/shoppingReducer";
import orderReducer from "../reducers/orderReducer";

import { rootSaga } from './saga';
import {RefreshState} from "../components/RefreshListView";
import constants from '../resources/constants';

const combinedReducers = combineReducers({
  root: rootReducer,
  auth: authReducer,
  union: unionReducer,
  shopping: shoppingReducer,
  order: orderReducer,
});

const initialState = new Immutable.Map({
  root: Immutable.Map({
    loading: false,
  }),
  auth: Immutable.Map({
    isLoggedIn: false,
    isRegisterSuccess: false,
    loginError: '',
    registerError: '',
    username: '',
    password: '',
    sessionId: '',
    customerInfo: {},
    personInfo: {},
  }),
  union: Immutable.Map({
    union: {},
    discount: null,
    priceList: [],
    unions: [],
    merchant: {},
    merchants: [],
    refreshState: RefreshState.Idle,
    datasError: false,
    dataResponse: constants.INITIAL,
  }),
  shopping: Immutable.Map({
    cartList:[],
    commodityList:[]
  }),
  order: Immutable.Map({
  }),
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      combinedReducers,
      initialState,
      compose(applyMiddleware(sagaMiddleware, createActionBuffer(REHYDRATE)), autoRehydrate({log: true})));

  persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ['auth'],
        transforms: [
          saveSubsetFilter(['username','password','sessionId','customerInfo'])
        ],
      }
  );

  return {
    ...store, runSaga: [sagaMiddleware.run(rootSaga)]
  };
}
