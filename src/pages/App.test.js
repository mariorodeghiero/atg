import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme'
import App from './App'

const mockStore = configureMockStore()

describe('<App />', () => {
	let wrapper, store
	const initialState = {
		gameSchedule: {
			data: {
				betType: 'V75'
			},
			error: false,
			success: false,
			loading: false
		},
		gameData: {
			data: {},
			error: false,
			success: false,
			loading: false
		}
	}

	beforeEach(() => {
		store = mockStore(initialState)
		wrapper = mount(
			<Provider store={store}>
				<App {...initialState} />
			</Provider>
		)
	})

	it('render the connected(App) component', () => {
		expect(wrapper.length).toEqual(1)
	})
})
