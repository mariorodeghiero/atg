import { all, takeLatest } from 'redux-saga/effects';

import { getGameSchedule } from './ducks/game-schedule/sagas';
import { getGameData } from './ducks/game-data/sagas';

import gameScheduleTypes from './ducks/game-schedule/types';
import gameDataTypes from './ducks/game-data/types';

export default function* rootSaga() {
    return yield all([
      takeLatest(gameScheduleTypes.GET_GAME_SCHEDULE_REQUEST, getGameSchedule),
      takeLatest(gameDataTypes.GET_GAME_DATA_REQUEST, getGameData),
    ]);
  }