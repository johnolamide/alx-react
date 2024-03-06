import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const mockState = {
    notifications: {
      filterType: 'important',
      notificationMap: new Map([
        [1, { id: 1, message: 'Notification 1', read: false }],
        [2, { id: 2, message: 'Notification 2', read: true }],
      ]),
    },
  };

  it('should return the correct filter type', () => {
    const result = filterTypeSelected(mockState);
    expect(result).toBe('important');
  });

  it('should return the notifications in a Map format', () => {
    const result = getNotifications(mockState);
    expect(result).toBeInstanceOf(Map);
  });

  it('should return unread notifications in a Map format', () => {
    const result = getUnreadNotifications(mockState);
    expect(result).toBeInstanceOf(Map);
  });
});
