import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ColorSwitcher from "./ColorSwitcher";
import { Container } from "./styles";
configure({ adapter: new Adapter() });

describe("<ColorSwitcher/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ColorSwitcher />);
  });
  it("should render <Container/>", () => {
    expect(wrapper.find(Container)).toHaveLength(1);
  });
});
