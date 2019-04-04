import { merge } from "lodash";
import {
  RECEIVE_USER_SELECTION,
  REMOVE_USER_SELECTION
} from "../../actions/dm_actions";

const defaultState = {
  selectedUsers: {}
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER_SELECTION:
      newState = merge({}, state);
      newState.selectedUsers[action.user.id] = action.user;
      return newState;
    case REMOVE_USER_SELECTION:
      newState = merge({}, state);
      delete newState.selectedUsers[action.id];
      return newState;
    default:
      return defaultState;
  }
};

export default uiReducer;
