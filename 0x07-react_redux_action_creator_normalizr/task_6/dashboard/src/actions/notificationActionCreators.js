import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index: index,
  };
};

const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  }
};

export { markAsRead, setNotificationFilter };