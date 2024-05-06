import { DISPLAY_NOTIFICATION_DRAWER, SELECT_COURSE } from "../actions/uiActionTypes";
import uiReducer from "./uiReducer";

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('changes correctly the isNotificationVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });
});