import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "./Button";
import { SelectedSliderButton, SliderButton } from "./styles";
configure({ adapter: new Adapter() });

describe("<Button/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });
  it("should render <SelectedSliderButton/>", () => {
    wrapper.setProps({ SelectedIndex: 5, ind: 5 });
    expect(wrapper.find(SelectedSliderButton)).toHaveLength(1);
  });
  it("should render <SliderButton/>", () => {
    wrapper.setProps({ SelectedIndex: 5, ind: 7 });
    expect(wrapper.find(SliderButton)).toHaveLength(1);
  });
});
