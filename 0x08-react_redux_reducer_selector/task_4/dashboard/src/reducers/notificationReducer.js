import { fromJS } from 'immutable';
import { FETCH_NOTIFICATION_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notificationNormalizer } from '../schema/notifications';

const initialState = fromJS({
  notifications: [],
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATION_SUCCESS:
      return state.mergeDeep(notificationNormalizer(action.data).entities.notifications);
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index.toString(), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;