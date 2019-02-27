import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: receiveSessionErrors,
  errors
});

export const login = (user) => dispatch => (
  SessionAPIUtil.postSession(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveSessionErrors(errors))
  )
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.postUser(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveSessionErrors(errors))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.deleteSession().then(
    () => dispatch(logoutUser())
  )
);