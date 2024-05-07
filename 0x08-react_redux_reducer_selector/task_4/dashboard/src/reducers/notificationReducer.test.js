import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import notificationReducer from "./notificationReducer";

describe("notificationReducer", () => {
	it("returns the default state when no action is passed", () => {
		expect(notificationReducer(undefined, {})).toEqual({
			filter: "DEFAULT",
			notifications: [],
		});
	});

	it("returns the data passed when FETCH_NOTIFICATIONS_SUCCESS is passed", () => {
		const action = {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, type: "urgent", value: "New data available" },
			],
		};
		const expectedState = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					type: "default",
					value: "New course available",
					isRead: false,
				},
				{
					id: 2,
					type: "urgent",
					value: "New resume available",
					isRead: false,
				},
				{
					id: 3,
					type: "urgent",
					value: "New data available",
					isRead: false,
				},
			],
		};
		expect(notificationReducer(undefined, action)).toEqual(expectedState);
	});

	it("returns the data with the right item updated when MARK_AS_READ is passed", () => {
		const initialState = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					type: "default",
					value: "New course available",
					isRead: false,
				},
				{
					id: 2,
					type: "urgent",
					value: "New resume available",
					isRead: false,
				},
				{
					id: 3,
					type: "urgent",
					value: "New data available",
					isRead: false,
				},
			],
		};
		const action = { type: MARK_AS_READ, index: 2 };
		const expectedState = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					type: "default",
					value: "New course available",
					isRead: false,
				},
				{
					id: 2,
					type: "urgent",
					value: "New resume available",
					isRead: true,
				},
				{
					id: 3,
					type: "urgent",
					value: "New data available",
					isRead: false,
				},
			],
		};
		expect(notificationReducer(initialState, action)).toEqual(
			expectedState
		);
	});

	it("returns the data with the right filter when SET_TYPE_FILTER is passed", () => {
		const initialState = {
			filter: "DEFAULT",
			notifications: [
				{
					id: 1,
					type: "default",
					value: "New course available",
					isRead: false,
				},
				{
					id: 2,
					type: "urgent",
					value: "New resume available",
					isRead: false,
				},
				{
					id: 3,
					type: "urgent",
					value: "New data available",
					isRead: false,
				},
			],
		};
		const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
		const expectedState = {
			filter: "URGENT",
			notifications: [
				{
					id: 1,
					type: "default",
					value: "New course available",
					isRead: false,
				},
				{
					id: 2,
					type: "urgent",
					value: "New resume available",
					isRead: false,
				},
				{
					id: 3,
					type: "urgent",
					value: "New data available",
					isRead: false,
				},
			],
		};
		expect(notificationReducer(initialState, action)).toEqual(
			expectedState
		);
	});
});
