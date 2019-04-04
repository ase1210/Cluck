import { connect } from "react-redux";
import DirectMessageForm from "./direct_message_form";
import { fetchAllUsers } from "../../../../../actions/session_actions";

const mSTP = state => ({
  selectedUsers: [
    {
      username: "Drew",
      id: 1,
      avatarURL:
        "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100"
    },
    {
      username: "Test",
      id: 2,
      avatarURL:
        "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100"
    }
  ]
});

const mDTP = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

const DirectMessageFormContainer = connect(
  mSTP,
  mDTP
)(DirectMessageForm);

export default DirectMessageFormContainer;
