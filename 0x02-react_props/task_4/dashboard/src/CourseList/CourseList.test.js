import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('CourseList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});