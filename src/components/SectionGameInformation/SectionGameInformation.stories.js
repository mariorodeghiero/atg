/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import SectionGameInformation from '.'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { races } from '../../mock/mock'

export default {
	title: 'Sections',
	component: SectionGameInformation
}

const initialState = {
	gameData: {
		data: {
			races: races
		},
		error: false,
		success: true,
		loading: false
	}
}
const mockStore = configureMockStore()
const store = mockStore(initialState)

export const gameInformation = () => (
	<Provider store={store}>
		<SectionGameInformation />
	</Provider>
)
