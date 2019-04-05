import { connect } from "react-redux";
import DirectMessageForm from "./direct_message_form";
import { fetchAllUsers } from "../../../../../actions/session_actions";
import { removeUserSelection } from "../../../../../actions/dm_actions";
import { createDMChatroom } from "../../../../../actions/chatroom_actions";

const mSTP = state => ({
  selectedUsers: Object.values(state.ui.selectedUsers),
  currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  removeUserSelection: id => dispatch(removeUserSelection(id)),
  createDMChatroom: chatroom => dispatch(createDMChatroom(chatroom))
});

const DirectMessageFormContainer = connect(
  mSTP,
  mDTP
)(DirectMessageForm);

export default DirectMessageFormContainer;
