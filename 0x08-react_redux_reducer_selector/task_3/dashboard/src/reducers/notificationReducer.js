import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from "../actions/notificationActionTypes";
import { Map, List } from 'immutable';

const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: List([
    Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
    Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
    Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
  ]),
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const updatedNotifications = List(action.data).map((notification) => Map({
        ...notification,
        isRead: false
      }));
      return state.set('notifications', updatedNotifications);
    
    case MARK_AS_READ:
      return state.updateIn(['notifications', action.index - 1, 'isRead'], () => true)
    
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;