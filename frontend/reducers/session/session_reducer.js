import { RECEIVE_USER, LOGOUT_USER } from "../../actions/session_actions";
import { merge } from "lodash";

const defaultState = {
  currentUser: null,
  selectedUsers: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, {
        currentUser: Object.keys(action.payload.user)[0]
      });
      return newState;
    case LOGOUT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
