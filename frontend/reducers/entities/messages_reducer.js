import { merge } from "lodash";
import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../../actions/message_actions";
import {
  RECEIVE_CHATROOMS,
  RECEIVE_CHATROOM
} from "../../actions/chatroom_actions";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.payload.messages;
    case RECEIVE_CHATROOM:
      newState = merge({}, state, action.payload.messages);
      return newState;
    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      newState[action.payload.message.id] = action.payload.message;
      return newState;
    case REMOVE_MESSAGE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
