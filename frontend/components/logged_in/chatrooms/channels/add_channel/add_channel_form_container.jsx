import { connect } from 'react-redux';
import AddChannelForm from './add_channel_form';
import { createChatroom } from '../../../../../actions/chatroom_actions';
import { updateChatroomUser } from '../../../../../actions/chatroom_user_actions';

const mSTP = (state) => ({
  currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
  createChatroom: (chatroom) => dispatch(createChatroom(chatroom)),
  updateChatroomUser: (chatroom_user) => dispatch(updateChatroomUser(chatroom_user))
});

const AddChannelFormContainer = connect(mSTP, mDTP)(AddChannelForm);

export default AddChannelFormContainer;