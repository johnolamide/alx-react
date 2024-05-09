import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe("Header", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
    
  it("renders the component without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders img tags", () => {
    expect(wrapper.find('img').length).toBeGreaterThan(0);
  });
    
  it("renders h1 tags", () => {
	expect(wrapper.find('h1').length).toBeGreaterThan(0);
  });
});