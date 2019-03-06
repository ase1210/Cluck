import { selectChatroomMessages } from '../../../../selectors/messages_selector';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';


const mSTP = (state, ownProps) => {
  const chatroomId = parseInt(ownProps.match.params.chatroomId);
  const chatroomMessages = selectChatroomMessages(state, chatroomId);
  return ({
    chatroomMessages
  });
};

const MessageIndexContainer = withRouter(connect(mSTP)(MessageIndex));

export default MessageIndexContainer;