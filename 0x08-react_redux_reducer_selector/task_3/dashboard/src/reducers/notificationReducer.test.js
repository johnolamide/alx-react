// notificationReducer.test.js

import { Map, List } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = Map({
    filter: NotificationTypeFilters.DEFAULT,
    notifications: List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
      Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
    ]),
  });

  it('should return the initial state when no action is passed', () => {
    expect(notificationReducer(initialState, {})).toEqual(initialState);
  });

  it('should correctly update notifications when FETCH_NOTIFICATIONS_SUCCESS action is passed', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const fetchAction = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedState = initialState.set('notifications', List(data).map(notification => Map({ ...notification, isRead: false })));
    expect(notificationReducer(initialState, fetchAction)).toEqual(expectedState);
  });

  it('should correctly update isRead when MARK_AS_READ action is passed', () => {
    const markAsReadAction = { type: MARK_AS_READ, index: 2 };
    const expectedState = initialState.updateIn(['notifications', 1, 'isRead'], () => true);
    expect(notificationReducer(initialState, markAsReadAction)).toEqual(expectedState);
  });

  it('should correctly update filter when SET_TYPE_FILTER action is passed', () => {
    const setTypeFilterAction = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT };
    const expectedState = initialState.set('filter', NotificationTypeFilters.URGENT);
    expect(notificationReducer(initialState, setTypeFilterAction)).toEqual(expectedState);
  });
});
