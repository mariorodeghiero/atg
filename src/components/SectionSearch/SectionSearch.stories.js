import React from 'react'
import SectionSearch from '.'
import { Provider } from 'react-redux'

import store from '../../store/store'

export default {
	title: 'Sections/Search',
	component: SectionSearch
}

export const search = () => (
	<Provider store={store}>
		<SectionSearch />
	</Provider>
)
