import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import gameSchedule from './ducks/game-schedule'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    gameSchedule,
  })

const persistedReducer = persistReducer({
    key: 'root',
    storage
  }, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export const persistedStore = persistStore(store)