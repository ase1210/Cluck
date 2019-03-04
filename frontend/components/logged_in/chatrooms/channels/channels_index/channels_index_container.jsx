import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { selectChannels, selectUserChatroomIds } from '../../../../../selectors/selectors';
import { formatDate } from '../../../../../util/date_util';
import { createChatroomUser, updateChatroomUser } from '../../../../../actions/chatroom_user_actions';

const mSTP = (state, ownProps) => {
  let channels = selectChannels(state, ownProps.search);
  let userChatroomIds = selectUserChatroomIds(state);
  return ({
    channels,
    formatDate: (date) => formatDate(date),
    currentUser: state.session.currentUser,
    userChatroomIds
  });
};

const mDTP = (dispatch) => ({
  createChatroomUser: (chatroomUser) => dispatch(createChatroomUser(chatroomUser)),
  updateChatroomUser: (chatroomUser) => dispatch(updateChatroomUser(chatroomUser))
});

const ChannelsIndexContainer = connect(mSTP, mDTP)(ChannelsIndex);

export default ChannelsIndexContainer;