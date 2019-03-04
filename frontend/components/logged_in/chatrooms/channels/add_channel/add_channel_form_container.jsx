import { connect } from 'react-redux';
import AddChannelForm from './add_channel_form';
import { createChatroom } from '../../../../../actions/chatroom_actions';


const mDTP = (dispatch) => ({
  createChatroom: (chatroom) => dispatch(createChatroom(chatroom))
});

const AddChannelFormContainer = connect(undefined, mDTP)(AddChannelForm);

export default AddChannelFormContainer;