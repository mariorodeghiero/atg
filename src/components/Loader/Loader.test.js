import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Loader from '.'
import ATG from '../../assets/atg.jpg'

describe('<Loader />', () => {
	it('render Loader without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Loader />, div)
	})

	it('should render image', () => {
		const wrapper = shallow(<Loader showLogo />)
		expect(wrapper.find('#image').prop('image')).toEqual(ATG)
	})
})
