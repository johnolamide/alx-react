import { schema } from 'normalizr';
import * as notifications from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const getAllNotificationsByUser = (userId) => {
  const context = [];
  
  for (const notification of notifications) {
    if (notification.author.id === userId) {
      context.push(notification.context);
    }
  }

  return context;
}