import React from 'react'
import ReactDOM from 'react-dom'

import FailedMessage from '.'

describe("Test FailedMessage Component", () => {
  it('render FailedMessage without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<FailedMessage/>, div)
	})
});
