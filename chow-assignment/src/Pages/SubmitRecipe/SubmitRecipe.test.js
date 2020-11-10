import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SubmitRecipe } from "./SubmitRecipe";
import { SubmitRecipeBody } from "./styles";

configure({ adapter: new Adapter() });

describe("<SubmitRecipe/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SubmitRecipe />);
  });
  it("should render <SubmitRecipeBody/>", () => {
    expect(wrapper.find(SubmitRecipeBody)).toHaveLength(1);
  });
});
