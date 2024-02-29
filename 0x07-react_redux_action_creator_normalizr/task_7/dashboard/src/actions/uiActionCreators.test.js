// uiActionCreators.test.js

import {
	login,
	logout,
	displayNotificationDrawer,
	hideNotificationDrawer,
} from "./uiActionCreators";
import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("UI Action Creators", () => {
	it("should create an action for user login", () => {
		const email = "user@example.com";
		const password = "secret123";
		const expectedAction = {
			type: LOGIN,
			payload: { user: { email, password } },
		};

		const action = login(email, password);
		expect(action).toEqual(expectedAction);
	});

	it("should create an action for user logout", () => {
		const expectedAction = {
			type: LOGOUT,
		};

		const action = logout();
		expect(action).toEqual(expectedAction);
	});

	it("should create an action for displaying the notifications drawer", () => {
		const expectedAction = {
			type: DISPLAY_NOTIFICATION_DRAWER,
		};

		const action = displayNotificationDrawer();
		expect(action).toEqual(expectedAction);
	});

	it("should create an action for hiding the notifications drawer", () => {
		const expectedAction = {
			type: HIDE_NOTIFICATION_DRAWER,
		};

		const action = hideNotificationDrawer();
		expect(action).toEqual(expectedAction);
	});
});
