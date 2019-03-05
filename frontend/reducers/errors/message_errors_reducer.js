import {
  CLEAR_ERRORS
} from "../../actions/session_actions";
import {
  RECEIVE_MESSAGE_ERRORS
} from "../../actions/message_actions";

const messageErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default messageErrorsReducer;