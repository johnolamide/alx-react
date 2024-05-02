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
	it("should create an action to log in", () => {
		const email = "user@example.com";
		const password = "secret123";
		const expectedAction = {
			type: LOGIN,
			user: { email, password },
		};
		expect(login(email, password)).toEqual(expectedAction);
	});

	it("should create an action to log out", () => {
		const expectedAction = {
			type: LOGOUT,
		};
		expect(logout()).toEqual(expectedAction);
	});

	it("should create an action to display the notifications drawer", () => {
		const expectedAction = {
			type: DISPLAY_NOTIFICATION_DRAWER,
		};
		expect(displayNotificationDrawer()).toEqual(expectedAction);
	});

	it("should create an action to hide the notifications drawer", () => {
		const expectedAction = {
			type: HIDE_NOTIFICATION_DRAWER,
		};
		expect(hideNotificationDrawer()).toEqual(expectedAction);
	});
});
