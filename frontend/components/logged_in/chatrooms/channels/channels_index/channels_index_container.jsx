import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { selectChannels } from '../../../../../selectors/selectors';
import { fetchChatrooms } from '../../../../../actions/chatroom_actions';

const mSTP = (state) => ({
  channels: selectChannels(state)
});

const mDTP = (dispatch) => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

const ChannelsIndexContainer = connect(mSTP, mDTP)(ChannelsIndex);

export default ChannelsIndexContainer;