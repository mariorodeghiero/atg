import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";

import Game from "./index"

const mockStore = configureMockStore();

describe("<Game />", () => {
  const id = 1
  const startTime ="2021-02-09T19:30:00"
  const getGameDataRequest=  jest.fn()
  const betType = "V75"
  const gameSelected = 2
  const setGameSelected = jest.fn()
  const initialState = {}
  const store = mockStore(initialState);

  it("render the connected(Game) component", () => {
    const wrapper = mount(
        <Provider store={store}>
          <Game
              id={id}
              startTime={startTime}
              getGameDataRequest={getGameDataRequest}
              betType={betType}
              gameSelected={gameSelected}
              setGameSelected={setGameSelected}/>
        </Provider>
      );
    expect(wrapper.length).toEqual(1);
  });

  it("should call the onClick event", () => {
    const wrapper = mount(<Provider store={store}>
        <Game
            id={id}
            startTime={startTime}
            getGameDataRequest={getGameDataRequest}
            betType={betType}
            gameSelected={gameSelected}
            setGameSelected={setGameSelected}/>
      </Provider>)
    wrapper.find('li').first().childAt(0).simulate('click')

	expect(setGameSelected.mock.calls.length).toEqual(1)
  });
});
