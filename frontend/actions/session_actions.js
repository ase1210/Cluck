import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const login = (user) => dispatch => (
  SessionAPIUtil.postSession(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.postUser(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.deleteSession().then(
    () => dispatch(logoutUser())
  )
);