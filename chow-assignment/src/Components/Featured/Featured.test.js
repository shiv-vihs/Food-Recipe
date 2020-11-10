import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Featured from "./Featured";
import { Link } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<Featured/>", () => {
  const Props = {
    source: {
      rating: "",
      picture: "",
      name: "",
      key: "",
    },
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Featured {...Props} />);
  });
  it("should render <Link/>", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
