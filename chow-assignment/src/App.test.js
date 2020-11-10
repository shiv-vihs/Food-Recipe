import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "./App";
import { LoginSignup } from "./Pages/LoginSignup/LoginSignup";
import { Wrapper } from "./AppStyle";

configure({ adapter: new Adapter() });

describe("<App/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render <Wrapper/>", () => {
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });
});
