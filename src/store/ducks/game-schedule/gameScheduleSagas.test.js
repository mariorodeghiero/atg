import { call, put } from 'redux-saga/effects'
import { getGameScheduleSuccess, getGameScheduleRequest } from './actions'
import api from '../../../services/api'

import { getGameSchedule } from './sagas'

const mock = {
	data: [],
	error: false,
	loading: false,
	success: false
}

describe('getGameSchedule', () => {
	it('success triggers success action with data', () => {
		const response = { data: { ...mock } }
		const action = { payload: 'V75' }
		const generator = getGameSchedule(getGameScheduleRequest(action.payload))
		expect(generator.next().value).toEqual(
			call(api.get, `products/${action.payload}`)
		)

		expect(generator.next(response).value).toEqual(
			put(getGameScheduleSuccess(mock))
		)

		expect(generator.next()).toEqual({ done: true, value: undefined })
	})

	it('failure triggers failure action', () => {
		const response = {}
		const action = { payload: 'V75' }
		const generator = getGameSchedule(getGameScheduleRequest(action.payload))
		expect(generator.next().value).toEqual(
			call(api.get, `products/${action.payload}`)
		)

		expect(generator.throw(response).value).toEqual(
			put({
				type: 'GET_GAME_SCHEDULE_FAILURE'
			})
		)
	})
})
