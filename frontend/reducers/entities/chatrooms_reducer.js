import {
  merge
} from 'lodash';
import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS
} from '../../actions/chatroom_actions';
import {
  RECEIVE_USER
} from '../../actions/session_actions';


const chatroomsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return action.chatrooms;
    case RECEIVE_USER:
      return action.payload.chatrooms;
    case RECEIVE_CHATROOM:
      return merge({}, state, action.chatroom);
    default:
      return state;
  }
}

export default chatroomsReducer;