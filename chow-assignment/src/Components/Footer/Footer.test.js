import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
import { StyledFooter } from "./styles";
configure({ adapter: new Adapter() });

describe("<Footer/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it("should render <StyledFooter/>", () => {
    expect(wrapper.find(StyledFooter)).toHaveLength(1);
  });
});
