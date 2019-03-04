import {
  merge
} from 'lodash';
import {
  RECEIVE_CHATROOMS,
  RECEIVE_CHATROOM
} from '../../actions/chatroom_actions';
import {
  RECEIVE_CHATROOM_USER
} from '../../actions/chatroom_user_actions';

const chatroomUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHATROOM_USER:
      return merge({}, state, action.chatroomUser);
    case RECEIVE_CHATROOMS:
      return merge({}, state, action.payload.chatroomUsers);
    case RECEIVE_CHATROOM:
      return merge({}, state, action.payload.chatroomUsers);
    default:
      return state;
  }
};

export default chatroomUsersReducer;