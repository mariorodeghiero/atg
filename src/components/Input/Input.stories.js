/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Input from '.'
import { Provider } from 'react-redux'

import store from '../../store/store'

export default {
	title: 'Components/Input',
	component: Input
}

const resetGameDataState = () => console.log("resetGameDataState")
const getGameScheduleRequest = () => console.log("getGameScheduleRequest")

export const input = () => (
	<Provider store={store}>
		<Input
				getGameScheduleRequest={getGameScheduleRequest}
				resetGameDataState={resetGameDataState}
		/>
	</Provider>
)
