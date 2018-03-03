// @flow
import { all } from 'redux-saga/effects'; // eslint-disable-line

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([]);
}
