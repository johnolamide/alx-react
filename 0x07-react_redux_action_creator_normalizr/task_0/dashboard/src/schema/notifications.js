import * as notificationsData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const userNotifications = notificationsData.filter(notification => {
    return notification.author.id === userId;
  });
  return userNotifications;
}

export default getAllNotificationsByUser;
