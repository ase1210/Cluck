import { connect } from "react-redux";
import DirectMessageForm from "./direct_message_form";
import { fetchAllUsers } from "../../../../../actions/session_actions";
import { removeUserSelection } from "../../../../../actions/dm_actions";

const mSTP = state => ({
  selectedUsers: Object.values(state.ui.selectedUsers)
});

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  removeUserSelection: id => dispatch(removeUserSelection(id))
});

const DirectMessageFormContainer = connect(
  mSTP,
  mDTP
)(DirectMessageForm);

export default DirectMessageFormContainer;
