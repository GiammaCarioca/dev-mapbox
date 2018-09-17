import { all, takeLatest } from 'redux-saga/effects';

import { addFaveDev } from './devs';

export default function* rootSaga() {
  yield all([takeLatest('ADD_DEV_REQUEST', addFaveDev)]);
}
