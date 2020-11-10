import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { RecipeDetails } from "./RecipeDetails";
import { RecipeContainer } from "./styles";

configure({ adapter: new Adapter() });

describe("<RecipeDetails/>", () => {
  const Props = {
    recipelist: {
      0: {},
    },
    cardselected: "0",
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RecipeDetails {...Props} />);
  });
  it("should render <RecipeContainer/>", () => {
    expect(wrapper.find(RecipeContainer).length).toBe(1);
  });
});
