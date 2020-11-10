import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { RecipePage } from "./RecipePage";
import { ContainerWrapper } from "../Home/styles";

configure({ adapter: new Adapter() });

describe("<RecipePage/>", () => {
  const Props = {
    RecList: { 0: {} },
    match: { params: "" },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RecipePage {...Props} />);
  });
  it("should render <ContainerWrapper/>", () => {
    expect(wrapper.find(ContainerWrapper)).toHaveLength(1);
  });
});
