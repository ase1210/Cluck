import {
  RECEIVE_USER_ERRORS
} from "../../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default sessionErrorsReducer;