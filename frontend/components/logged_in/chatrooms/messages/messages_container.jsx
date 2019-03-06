import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Messages from './messages';
import { createMessage } from '../../../../actions/message_actions';


const mSTP = (state, ownProps) => {
  let chatroomId = parseInt(ownProps.match.params.chatroomId);
  let activeChatroom = state.entities.chatrooms[chatroomId];
  return ({
    activeChatroom
  });
};

const mDTP = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message))
});

const MessagesContainer = withRouter(connect(mSTP, mDTP)(Messages));

export default MessagesContainer;