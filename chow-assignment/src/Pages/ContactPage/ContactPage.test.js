import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContactPage from "./ContactPage";
import { OuterContainer } from "./styles";

configure({ adapter: new Adapter() });

describe("<ContactPage/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactPage />);
  });
  it("should render <Container/>", () => {
    expect(wrapper.find(OuterContainer)).toHaveLength(1);
  });
});
