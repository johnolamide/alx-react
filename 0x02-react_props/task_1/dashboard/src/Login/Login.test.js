import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 2 input tags", () => {
    expect(wrapper.find('input').length).toBe(2);
  });

  it("renders 2 label tags", () => {
    expect(wrapper.find('label').length).toBe(2);
  });
});