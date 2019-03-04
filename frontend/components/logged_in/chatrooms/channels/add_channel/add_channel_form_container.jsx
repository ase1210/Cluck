import { connect } from 'react-redux';
import AddChannelForm from './add_channel_form';
import { createChatroom } from '../../../../../actions/chatroom_actions';
import { updateChatroomUser } from '../../../../../actions/chatroom_user_actions';


const mDTP = (dispatch) => ({
  createChatroom: (chatroom) => dispatch(createChatroom(chatroom)),
  updateChatroomUser: (chatroom_user) => dispatch(updateChatroomUser(chatroom_user))
});

const AddChannelFormContainer = connect(undefined, mDTP)(AddChannelForm);

export default AddChannelFormContainer;