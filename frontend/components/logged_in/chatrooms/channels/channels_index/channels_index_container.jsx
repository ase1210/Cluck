import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { selectChannels } from '../../../../../selectors/selectors';
import { formatDate } from '../../../../../util/date_util';
import { createChatroomUser } from '../../../../../actions/chatroom_user_actions';

const mSTP = (state, ownProps) => {
  let channels = selectChannels(state, ownProps.search);
  return ({
    channels,
    formatDate: (date) => formatDate(date),
    currentUser: state.session.currentUser
  });
};

const mDTP = (dispatch) => ({
  createChatroomUser: (chatroomUser) => dispatch(createChatroomUser(chatroomUser))
});

const ChannelsIndexContainer = connect(mSTP, mDTP)(ChannelsIndex);

export default ChannelsIndexContainer;