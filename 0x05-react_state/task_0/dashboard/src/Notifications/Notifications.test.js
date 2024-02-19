import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Notification components', () => {
    expect(wrapper.find(NotificationItem).length).toBeGreaterThan(0);
  });

  it('first NotificationItem element renders the right html', () => {
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    const expectedHtml = '<li data-notification-type="default">New course available</li>';
    expect(firstNotificationItem.html()).toEqual(expectedHtml);
  });

  describe('when displayDrawer is false', () => {
    beforeEach(() => {
      wrapper.setProps({ displayDrawer: false });
    });

    it('checks that menu item is displayed', () => {

    });

    it('checks that div.notifications is not being displayed', () => {

    });
  });

  describe('when displayDrawer is true', () => {
    beforeEach(() => {
      wrapper.setProps({ displayDrawer: true });
    });

    it('checks that menu item is being displayed', () => {

    });

    it('checks that div.noifications is being displayed', () => {
      
    });
  });
});
