import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { getGameScheduleSuccess, getGameScheduleFailure } from './actions';

export function* getGameSchedule(action) {
  try {
    const response = yield call(api.get, `products/${action.payload}`);

    yield put(getGameScheduleSuccess(response.data));
  } catch (err) {
    yield put(getGameScheduleFailure());
  }
}