import React from "react";
import { configure, shallow, mount } from "enzyme";
import { LoginSignup } from "./LoginSignup";
import Adapter from "enzyme-adapter-react-16";
import Signup from "../../Components/Signup/Signup";
import Login from "../../Components/Login/Login";
configure({ adapter: new Adapter() });

describe("<LoginSignup/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginSignup />);
  });
  it("should render <Signup/>", () => {
    wrapper.setProps({ sgnup: true });
    expect(wrapper.find(Signup)).toHaveLength(1);
  });
  it("should not render <Signup/>", () => {
    wrapper.setProps({ sgnup: false });
    expect(wrapper.find(Signup)).toHaveLength(0);
  });
  it("should render <Login/>", () => {
    wrapper.setProps({ sgnup: false });
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("should not render <Login/>", () => {
    wrapper.setProps({ sgnup: true });
    expect(wrapper.find(Login)).toHaveLength(0);
  });
});
