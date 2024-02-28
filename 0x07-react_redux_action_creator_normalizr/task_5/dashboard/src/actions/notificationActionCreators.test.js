// notificationActionCreators.test.js

import {
	markAsRead,
	setNotificationFilter,
} from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { NotificationTypeFilters } from "./notificationActionTypes"; // Import the filter states

describe("Notification Action Creators", () => {
	it("should create an action for marking a notification as read", () => {
		const index = 1;
		const expectedAction = {
			type: MARK_AS_READ,
			payload: index,
		};

		const action = markAsRead(index);
		expect(action).toEqual(expectedAction);
	});

	it("should create an action for setting the notification filter", () => {
		const filter = NotificationTypeFilters.DEFAULT; // Use one of the filter states
		const expectedAction = {
			type: SET_TYPE_FILTER,
			payload: filter,
		};

		const action = setNotificationFilter(filter);
		expect(action).toEqual(expectedAction);
	});
});
