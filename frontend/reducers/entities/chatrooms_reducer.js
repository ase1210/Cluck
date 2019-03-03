import {
  merge
} from 'lodash';
import {
  RECEIVE_CHATROOM,
  RECEIVE_CHATROOMS
} from '../../actions/chatroom_actions';


const chatroomsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return merge({}, state, action.payload.chatrooms, action.payload.channels);
    case RECEIVE_CHATROOM:
      return merge({}, state, action.chatroom);
    default:
      return state;
  }
}

export default chatroomsReducer;