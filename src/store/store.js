import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import gameSchedule from './ducks/game-schedule'
import gameData from './ducks/game-data'

import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	gameSchedule,
	gameData
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
