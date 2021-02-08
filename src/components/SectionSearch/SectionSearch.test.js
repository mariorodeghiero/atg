import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { render } from 'enzyme'

import SectionSearch from '.'

const middlewares = []
const mockStore = configureMockStore(middlewares);
const initialState =  {
  data: [],
  error: false,
  loading: false,
  success: false
}
const store = mockStore(initialState);

describe('<SectionSearch />', () => {
	it('render SectionSearch without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Provider store={store}><SectionSearch /></Provider>, div)
  })
  
  it('should contain title', () => {
    const wrapper =  render(
      <Provider store={store}><SectionSearch /></Provider>
    )
    expect(wrapper.text()).toContain("Find The Best Game")
  })

  it('should render the Input', () => {
    const wrapper = render(<Provider store={store}><SectionSearch /></Provider>);
    expect(wrapper.find("input").length).toEqual(1);
  });
})