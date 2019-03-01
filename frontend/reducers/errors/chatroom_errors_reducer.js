import {
  RECEIVE_CHATROOM_ERRORS
} from "../../actions/chatroom_actions";
import {
  CLEAR_ERRORS
} from "../../actions/session_actions";

const chatroomErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHATROOM_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default chatroomErrorsReducer;