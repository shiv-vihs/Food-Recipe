import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Body } from "./Home";
import { OuterContainer } from "./styles";

configure({ adapter: new Adapter() });

describe("<Body/>", () => {
  const Props = {
    RecList: { 0: {} },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Body {...Props} onInitRecipeList={() => {}} />);
  });
  it("should render <OuterContainer/>", () => {
    expect(wrapper.find(OuterContainer)).toHaveLength(1);
  });
});
