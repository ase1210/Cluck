import {
  merge
} from 'lodash';
import {
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../../actions/message_actions';
import {
  RECEIVE_CHATROOMS
} from '../../actions/chatroom_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.payload.messages;
    case RECEIVE_MESSAGE:
      return merge({}, state, action.message);
    case REMOVE_MESSAGE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;