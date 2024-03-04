import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
    
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(initialState, {})).toEqual(initialState);
  });
    
  it('should return the initial state when an unknown action (SELECT_COURSE) is passed', () => {
    const unknownAction = { type: 'SELECT_COURSE' };
    expect(uiReducer(initialState, unknownAction)).toEqual(initialState);
  });
    
  it('should correctly update isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const displayAction = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    expect(uiReducer(initialState, displayAction)).toEqual(expectedState);
  });
});