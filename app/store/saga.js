import { all } from 'redux-saga/effects';
import authSagas from '../saga/auth-saga';
import unionSagas from '../saga/union-saga';
import shoppingSagas from '../saga/shopping-saga';

const sagas = [
  ...authSagas,
  ...unionSagas,
  ...shoppingSagas,
];

export function* rootSaga() {
  yield all([...sagas]);
}
