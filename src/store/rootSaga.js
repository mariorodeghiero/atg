import { call, put, all, takeLatest } from 'redux-saga/effects';

import types from './ducks/game-schedule/types';

import { getGameSchedule } from './ducks/game-schedule/sagas';

export default function* rootSaga() {
    return yield all([
      takeLatest(types.GET_GAME_SCHEDULE_REQUEST, getGameSchedule),
    ]);
  }