import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import chatroomErrorsReducer from './chatroom_errors_reducer';
import messageErrorsReducer from './message_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  chatroomErrors: chatroomErrorsReducer,
  messageErrors: messageErrorsReducer,
});

export default errorsReducer;