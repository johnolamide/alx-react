import { normalize } from "normalizr";
import getAllNotificationsByUser, { user, message, notification } from "./notifications";

const rawData = {
	users: [
		{
			id: "5debd764a7c57c7839d722e9",
			name: { first: "Poole", last: "Sanders" },
			email: "poole.sanders@holberton.nz",
			age: 25,
			picture: "http://placehold.it/32x32",
		},
		// ... other user data
	],
	messages: [
		{
			guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
			isRead: false,
			type: "default",
			value: "Cursus risus at ultrices mi.",
		},
		// ... other message data
	],
	notifications: [
		{
			author: "5debd764f8452ef92346c772",
			context: "3068c575-d619-40af-bf12-dece1ee18dd3",
			// ... other notification data
		},
		// ... other notification data
	],
};

const normalizedData = normalize(rawData, {
  users: [user],
  messages: [message],
  notification: [notification],
});

describe("Normalized Data", () => {
	it("should have correct result array", () => {
		expect(Object.keys(normalizedData.entities.users)).toEqual([
			// IDs of users
			// ...
		]);
	});

	it("should access user with ID 5debd764a7c57c7839d722e9", () => {
		const userId = "5debd764a7c57c7839d722e9";
		expect(normalizedData.entities.users[userId]).toEqual({
			age: 25,
			email: "poole.sanders@holberton.nz",
			id: userId,
			name: { first: "Poole", last: "Sanders" },
			picture: "http://placehold.it/32x32",
		});
	});

	it("should access message with guid efb6c485-00f7-4fdf-97cc-5e12d14d6c41", () => {
		const messageId = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";
		expect(normalizedData.entities.messages[messageId]).toEqual({
			guid: messageId,
			isRead: false,
			type: "default",
			value: "Cursus risus at ultrices mi.",
		});
	});

	it("should access notification with ID 5debd7642e815cd350407777", () => {
		const notificationId = "5debd7642e815cd350407777";
		expect(normalizedData.entities.notifications[notificationId]).toEqual({
			author: "5debd764f8452ef92346c772",
			context: "3068c575-d619-40af-bf12-dece1ee18dd3",
			// ... other notification data
		});
	});
});

describe('getAllNotificationsByUser', () => {
  it('should return notifications for a given user ID', () => {
    const userId = "5debd764a7c57c7839d722e9 ";
    const expectedNotifications = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      },
    ];
    const userNotifications = getAllNotificationsByUser(userId);
    expectedNotifications(userNotifications).toEqual(expect.arrayContaining(expectedNotifications));
  });
});