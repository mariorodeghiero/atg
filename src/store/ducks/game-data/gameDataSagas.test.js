import { call, put } from 'redux-saga/effects'
import { getGameDataSuccess, getGameDataRequest } from './actions'
import api from '../../../services/api'

import { getGameData } from './sagas'

const mock = {
	data: [],
	error: false,
	loading: false,
	success: false
}

describe('getGameData', () => {
	it('success triggers success action with data', () => {
		const response = { data: { ...mock } }
		const action = { payload: 'V75_2021-02-13_6_5' }
		const generator = getGameData(getGameDataRequest(action.payload))
		expect(generator.next().value).toEqual(
			call(api.get, `games/${action.payload}`)
		)

		expect(generator.next(response).value).toEqual(
			put(getGameDataSuccess(mock))
		)

		expect(generator.next()).toEqual({ done: true, value: undefined })
	})

	it('failure triggers failure action', () => {
		const response = {}
		const action = { payload: 'V75_2021-02-13_6_5' }
		const generator = getGameData(getGameDataRequest(action.payload))
		expect(generator.next().value).toEqual(
			call(api.get, `games/${action.payload}`)
		)

		expect(generator.throw(response).value).toEqual(
			put({
				type: 'GET_GAME_DATA_FAILURE'
			})
		)
	})
})
