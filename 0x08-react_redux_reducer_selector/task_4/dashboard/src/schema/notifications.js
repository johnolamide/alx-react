import { schema, normalize } from 'normalizr';
import * as notifications from '../../notifications.json';

const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema,
});

const normalizedData = normalize(notifications, [notificationSchema]);

export const notificationsNormalizer = (data) => {
  return normalize(date, [notificationSchema]);
}

const getAllNotificationsByUser = (userId) => {
  const { entities } = normalizedData;
  const userNotifications = entities.notifications;

  const userNotificationIds = Object.keys(userNotifications).filter((notificationId) => userNotifications[notificationId].author.id === userId);

  return userNotificationIds.map((notificationId) => userNotifications[notificationId].context);
}