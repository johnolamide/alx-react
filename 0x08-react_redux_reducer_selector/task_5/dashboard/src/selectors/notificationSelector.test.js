import { fromJS } from "immutable";
import {
	filterTypeSelected,
	getNotifications,
	getUnreadNotifications,
} from "./notificationSelector";

describe("notificationSelector", () => {
	const state = fromJS({
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
	});

	it("returns the filter type when filterTypeSelected is called", () => {
		expect(filterTypeSelected(state)).toEqual("DEFAULT");
	});

	it("returns the notifications when getNotifications is called", () => {
		expect(getNotifications(state).toJS()).toEqual([
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
		]);
	});

	it("returns the unread notifications when getUnreadNotifications is called", () => {
		expect(getUnreadNotifications(state).toJS()).toEqual([
			{
				id: 1,
				type: "default",
				value: "New course available",
				isRead: false,
			},
			{
				id: 3,
				type: "urgent",
				value: "New data available",
				isRead: false,
			},
		]);
	});
});
