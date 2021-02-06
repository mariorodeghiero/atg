import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getGameDataSuccess, getGameDataFailure } from './actions';

export function* getGameData(action) {
  try {
    const response = yield call(api.get, `games/${action.payload}`);

    yield put(getGameDataSuccess(response.data));
  } catch (err) {
    yield put(getGameDataFailure());
  }
}