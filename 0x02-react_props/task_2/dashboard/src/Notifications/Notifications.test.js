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
});
