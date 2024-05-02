import {schema, normalize} from 'normalizr'
import * as notificationsData from '../../notifications.json';


const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData, [notification]);

const getAllNotificationsByUser = (userId) => {
  const userNotifications = normalizedData.entities.notification
  return Object.values(userNotifications).filter(notification => {
    return notification.author === userId;
  });
};

export default getAllNotificationsByUser;
export { user, message, notification }
