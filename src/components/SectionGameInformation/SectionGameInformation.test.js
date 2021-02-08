import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";

import SectionGameInformation from ".";

const mockStore = configureMockStore();

describe("<SectionGameInformation />", () => {
  let wrapper, store;
  const initialState = {
    gameData: {
      data: {
        races: [],
      },
      error: false,
      success: true,
      loading: false,
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <SectionGameInformation {...initialState} />
      </Provider>
    );
  });

  it("render the connected(SectionGameInformation) component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("check Prop matches with initialState", () => {
    expect(wrapper.find(SectionGameInformation).prop("gameData")).toEqual(
      initialState.gameData
    );
  });

  it("should render Game Information", () => {
    expect(wrapper.text()).toContain("Game Information")
    expect(
      wrapper.find(SectionGameInformation).props().gameData.success
    ).toEqual(true);
  });
});
