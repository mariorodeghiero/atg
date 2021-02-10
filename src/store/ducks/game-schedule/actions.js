import types from './types'

export const getGameScheduleRequest = (id) => ({
	type: types.GET_GAME_SCHEDULE_REQUEST,
	payload: id
})

export const getGameScheduleSuccess = (data) => ({
	type: types.GET_GAME_SCHEDULE_SUCCESS,
	payload: { data }
})

export const getGameScheduleFailure = () => ({
	type: types.GET_GAME_SCHEDULE_FAILURE
})
