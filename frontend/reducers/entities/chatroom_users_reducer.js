import {
  merge
} from 'lodash';
import {
  RECEIVE_USER
} from '../../actions/session_actions';


const chatroomUsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.chatroomUsers;
    default:
      return state;
  }
}

export default chatroomUsersReducer;