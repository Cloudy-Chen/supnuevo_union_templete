import { all } from 'redux-saga/effects';
import authSagas from '../saga/auth-saga';
import unionSagas from '../saga/union-saga';

const sagas = [
  ...authSagas,
  ...unionSagas,
];

export function* rootSaga() {
  yield all([...sagas]);
}
