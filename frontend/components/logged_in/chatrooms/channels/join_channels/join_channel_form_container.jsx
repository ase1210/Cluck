import { connect } from 'react-redux';
import JoinChannelForm from './join_channel_form';
import { fetchChatrooms } from '../../../../../actions/chatroom_actions';


const mDTP = (dispatch) => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

const JoinChannelFormContainer = connect(undefined, mDTP)(JoinChannelForm);

export default JoinChannelFormContainer;