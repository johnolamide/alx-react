export const filterTypeSelected = (state) => {
  return state.notifications.filterType;
};

export const getNotifications = (state) => {
  return state.notifications.notificationMap;
};

export const getUnreadNotifications = (state) => {
  const allNotifications = state.notifications.notificationMap;
  return allNotifications.filter((notification) => !notification.read);
};