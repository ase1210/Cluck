import { RECEIVE_USER, RECEIVE_USERS } from "../../actions/session_actions";
import { merge } from "lodash";
import { RECEIVE_CHATROOMS } from "../../actions/chatroom_actions";
import { RECEIVE_MESSAGE } from "../../actions/message_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return merge({}, state, action.payload.users);
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      return merge({}, state, action.payload.user);
    case RECEIVE_MESSAGE:
      newState = merge({}, state);
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
