import { connect } from "react-redux";
import DirectMessageForm from "./direct_message_form";
import { fetchAllUsers } from "../../../../../actions/session_actions";
import { removeUserSelection } from "../../../../../actions/dm_actions";

const mSTP = state => ({
  selectedUsers: Object.values(state.session.selectedUsers)
  // selectedUsers: [
  //   {
  //     username: "Drew",
  //     id: 1,
  //     avatarURL:
  //       "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100"
  //   },
  //   {
  //     username: "Test",
  //     id: 2,
  //     avatarURL:
  //       "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100"
  //   }
  // ]
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
