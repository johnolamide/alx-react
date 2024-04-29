import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the text Copyright", () => {
    expect(wrapper.text().includes("Copyright")).toBe(true);
  });
});