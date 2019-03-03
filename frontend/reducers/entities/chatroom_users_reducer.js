import {
  merge
} from 'lodash';
import {
  RECEIVE_CHATROOMS
} from '../../actions/chatroom_actions';


const chatroomUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHATROOMS:
      return merge({}, state, action.payload.chatroomUsers)
    default:
      return state;
  }
}

export default chatroomUsersReducer;