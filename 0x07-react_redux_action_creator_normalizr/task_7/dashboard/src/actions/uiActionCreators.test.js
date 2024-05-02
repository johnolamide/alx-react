import thunk from 'redux-thunk';

import {
	login,
	logout,
	displayNotificationDrawer,
	hideNotificationDrawer,
	loginRequest
} from "./uiActionCreators";
import {
	LOGIN,
	LOGOUT,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("loginRequest", () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it("should dispatch LOGIN and LOGIN_SUCCESS on successful API call", () => {
		fetchMock.getOnce("/login-success.json", { status: 200 });

		const expectedActions = [{ type: LOGIN }, { type: LOGIN_SUCCESS }];

		const store = mockStore({});
		return store
			.dispatch(loginRequest("user@example.com", "secret"))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});

	it("should dispatch LOGIN and LOGIN_FAILURE on failed API call", () => {
		fetchMock.getOnce("/login-success.json", { status: 404 });

		const expectedActions = [{ type: LOGIN }, { type: LOGIN_FAILURE }];

		const store = mockStore({});
		return store
			.dispatch(loginRequest("user@example.com", "secret"))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
	});
});