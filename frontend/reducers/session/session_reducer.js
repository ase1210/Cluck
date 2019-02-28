import {
  RECEIVE_USER,
  LOGOUT_USER
} from "../../actions/session_actions";

const defaultState = {
  currentUser: null
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return {
        currentUser: Object.keys(action.user)[0]
      };
    case LOGOUT_USER:
      return defaultState;
    default:
      return state;
  }
}

export default sessionReducer;