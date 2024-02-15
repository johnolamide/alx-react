import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('NotificationItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationItem />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html when passed type and value props', () => {
    wrapper.setProps({ type: 'default', value: 'test' });
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correct html when passed html prop', () => {
    wrapper.setProps({ html: {__html: '<u>test</u>' } });
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});