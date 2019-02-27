import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
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