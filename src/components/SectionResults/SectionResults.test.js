import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";

import SectionResults from ".";

const mockStore = configureMockStore();

describe("<SectionResults />", () => {
  let wrapper, store;
  const initialState = {
    gameSchedule: {
      data: {
        betType: "V75",
      },
      error: false,
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <SectionResults {...initialState} />
      </Provider>
    );
  });

  it("render the connected(SectionResults) component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    expect(wrapper.find(SectionResults).prop("gameSchedule")).toEqual(
      initialState.gameSchedule
    );
    expect(wrapper.find(SectionResults).props().gameSchedule.error).toEqual(false);
  });
});
