import { all } from 'redux-saga/effects';
import authSagas from '../saga/auth-saga';

const sagas = [
  ...authSagas,
];

export function* rootSaga() {
  yield all([...sagas]);
}
