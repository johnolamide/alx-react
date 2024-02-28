import * as notifications from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const context = [];
  
  for (const notification of notifications) {
    if (notification.author.id === userId) {
      context.push(notification.context);
    }
  }

  return context;
}