import { selectChatroomMessages } from '../../../../selectors/messages_selector';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';
import { formatDateTime } from '../../../../util/date_util';

const mSTP = (state, ownProps) => {
  const chatroomId = parseInt(ownProps.match.params.chatroomId);
  const chatroomMessages = selectChatroomMessages(state, chatroomId);
  const users = state.entities.users;
  return ({
    chatroomMessages, formatDateTime, users
  });
};

const MessageIndexContainer = withRouter(connect(mSTP)(MessageIndex));

export default MessageIndexContainer;