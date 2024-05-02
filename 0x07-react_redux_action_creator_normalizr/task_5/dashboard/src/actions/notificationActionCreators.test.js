import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe("Notification Action Creators", () => {
	it("should create an action to mark a notification as read", () => {
		const index = 1;
		const expectedAction = {
			type: MARK_AS_READ,
			index: index,
		};
		expect(markAsRead(index)).toEqual(expectedAction);
	});

	it("should create an action to set the notification filter", () => {
		const filter = "DEFAULT";
		const expectedAction = {
			type: SET_TYPE_FILTER,
			filter: filter,
		};
		expect(setNotificationFilter(filter)).toEqual(expectedAction);
	});
});