import { connect } from 'react-redux';
import JoinChannelForm from './join_channel_form';
import { selectChannels } from '../../../../../selectors/selectors';
import { fetchChatrooms } from '../../../../../actions/chatroom_actions';

const mSTP = (state) => ({
  channels: selectChannels(state)
});

const mDTP = (dispatch) => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

const JoinChannelFormContainer = connect(mSTP, mDTP)(JoinChannelForm);

export default JoinChannelFormContainer;