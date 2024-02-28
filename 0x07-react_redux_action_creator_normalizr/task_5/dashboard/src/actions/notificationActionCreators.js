import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    payload: index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    payload: filter,
  };
};

export default {
  markAsRead,
  setNotificationFilter,
};