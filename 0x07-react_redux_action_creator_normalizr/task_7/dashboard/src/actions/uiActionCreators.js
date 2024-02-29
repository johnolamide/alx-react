import { bindActionCreators } from 'redux';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: { user: { email, password } },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('/login-success.json');
      const data = await response.json();

      if (data.email === email) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer
    },
    dispatch
  );
};