import {schema} from 'normalizr'
import * as notificationsData from '../../notifications.json';


const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const getAllNotificationsByUser = (userId) => {
  const userNotifications = notificationsData.filter(notification => {
    return notification.author.id === userId;
  });
  return userNotifications;
}

export default getAllNotificationsByUser;
export { user, message, notification }
