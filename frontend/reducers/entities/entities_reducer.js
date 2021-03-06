import {
  combineReducers
} from 'redux';
import usersReducer from './users_reducer';
import chatroomsReducer from './chatrooms_reducer';
import chatroomUsersReducer from './chatroom_users_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  chatrooms: chatroomsReducer,
  chatroomUsers: chatroomUsersReducer,
  messages: messagesReducer
});

export default entitiesReducer;