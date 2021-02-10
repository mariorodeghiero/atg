import React from 'react'
import App from './App'
import { Provider } from 'react-redux'

import store from '../store/store'

export default {
	title: 'Views',
	component: App
}

export const app = () => (
	<Provider store={store}>
		<App />
	</Provider>
)
