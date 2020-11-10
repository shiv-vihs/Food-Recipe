import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Card } from "./Card";
import { CardContainer } from "./styles";
configure({ adapter: new Adapter() });

describe("<Card/>", () => {
  const Props = {
    selectedrecipe: {
      name: "",
      cooking: "",
    },
    keyselected: "",
    photo: "",
    source: "recipeThumb-01",
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card {...Props} />);
  });
  it("should render <CardContainer/>", () => {
    expect(wrapper.find(CardContainer)).toHaveLength(1);
  });
});
