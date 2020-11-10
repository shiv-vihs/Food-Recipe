import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header } from "./Header";
import { DropDownContainer, HeaderDiv, SelectedMobileDiv } from "./styles";
configure({ adapter: new Adapter() });

describe("<Header/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("should render <HeaderDiv/>", () => {
    // wrapper.setProps({ clked: true });
    expect(wrapper.find(HeaderDiv)).toHaveLength(1);
  });
  it("should render <SelectedMobileDiv />", () => {
    wrapper.setProps({ clked: true });
    expect(wrapper.find(SelectedMobileDiv)).toHaveLength(1);
  });
  it("should render <DropDownContainer />", () => {
    wrapper.setProps({ clked: true });
    expect(wrapper.find(DropDownContainer)).toHaveLength(1);
  });
  it("should not render <SelectedMobileDiv />", () => {
    wrapper.setProps({ clked: false });
    expect(wrapper.find(SelectedMobileDiv)).toHaveLength(0);
  });
  it("should not render <DropDownContainer />", () => {
    wrapper.setProps({ clked: false });
    expect(wrapper.find(DropDownContainer)).toHaveLength(0);
  });
});

// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
