import React from 'react'
import SectionResults from '.'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

// import store from '../../store/store'

export default {
	title: 'Sections/Results',
	component: SectionResults
}

const upcoming = [
	{
		id: 'V75_2021-02-13_6_5',
		startTime: '2021-02-13T16:20:00',
		tracks: [{ id: 6, name: 'Åby' }],
		favorites: [
			{
				raceId: '2021-02-13_6_11',
				legNumber: 7,
				start: { number: 4, name: 'Broadway Sun', distribution: 6400 }
			},
			{
				raceId: '2021-02-13_6_9',
				legNumber: 5,
				start: { number: 1, name: 'Bugatti Miles', distribution: 5300 }
			},
			{
				raceId: '2021-02-13_6_6',
				legNumber: 2,
				start: { number: 2, name: 'Bold Heuvelland', distribution: 3400 }
			}
		],
		addOns: ['boost']
	},
	{
		id: 'V75_2021-03-13_6_5',
		startTime: '2021-02-13T17:00:00',
		tracks: [{ id: 6, name: 'Åby' }],
		favorites: [
			{
				raceId: '2021-02-13_6_11',
				legNumber: 7,
				start: { number: 4, name: 'Broadway Sun', distribution: 6400 }
			},
			{
				raceId: '2021-02-13_6_9',
				legNumber: 5,
				start: { number: 1, name: 'Bugatti Miles', distribution: 5300 }
			},
			{
				raceId: '2021-02-13_6_6',
				legNumber: 2,
				start: { number: 2, name: 'Bold Heuvelland', distribution: 3400 }
			}
		],
		addOns: ['boost']
	}
]

const initialState = {
	gameSchedule: {
		data: {
			betType: 'V75',
			upcoming: upcoming
		},
		error: false,
		success: true,
		loading: false
	}
}
const mockStore = configureMockStore()

const store = mockStore(initialState)

export const results = () => (
	<Provider store={store}>
		<SectionResults success={true} upcoming={upcoming} betType="V7c" />
	</Provider>
)
