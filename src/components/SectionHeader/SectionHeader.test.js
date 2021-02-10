import React from 'react'
import ReactDOM from 'react-dom'

import SectionHeader from '.'

describe('Test SectionHeader Component', () => {
	it('render SectionHeader without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<SectionHeader />, div)
	})
})
