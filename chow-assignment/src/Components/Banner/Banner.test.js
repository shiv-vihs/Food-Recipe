import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Banner } from "./Banner";
import { SliderImage } from "../../Pages/Home/styles";
configure({ adapter: new Adapter() });

describe("<Banner/>", () => {
  const Props = {
    attributes: {
      tag: "",
      name: "",
      servings: "",
      time: "",
      chef: "",
    },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Banner {...Props} />);
  });
  it("should render <SliderImage/>", () => {
    expect(wrapper.find(SliderImage)).toHaveLength(1);
  });
});
