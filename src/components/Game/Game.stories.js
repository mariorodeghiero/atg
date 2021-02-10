/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Game from '.'
import { Provider } from 'react-redux'

import store from '../../store/store'

export default {
	title: 'Components/Game',
	component: Game
}

const id = 1
const startTime = '2021-02-09T19:30:00'
const getGameDataRequest = () => console.log('getGameDataRequest')
const betType = 'V75'
const selected = 2
const setGameSelected = () => console.log('setGameSelected')

export const gameDefault = () => (
	<Provider store={store}>
		<Game
			id={id}
			startTime={startTime}
			getGameDataRequest={getGameDataRequest}
			betType={betType}
			gameSelected={selected}
			setGameSelected={setGameSelected}
		/>
	</Provider>
)

export const gameSelected = () => (
	<Provider store={store}>
		<Game
			id={id}
			startTime={startTime}
			getGameDataRequest={getGameDataRequest}
			betType={betType}
			gameSelected={1}
			setGameSelected={setGameSelected}
		/>
	</Provider>
)
