import { connect } from "react-redux";
import Sidebar from "./sidebar";
import { withRouter } from "react-router-dom";
import {
  selectChatrooms,
  selectChatroomIds,
  selectSubscribedUserChatroomIds,
  getDMName
} from "../../../../selectors/chatrooms_selectors";
import {
  fetchChatrooms,
  fetchChatroom
} from "../../../../actions/chatroom_actions";
import { updateChatroomUser } from "../../../../actions/chatroom_user_actions";
import { receiveMessage } from "../../../../actions/message_actions";

const mSTP = state => {
  let chatrooms = selectChatrooms(state);
  let userChatroomIds = selectSubscribedUserChatroomIds(state);
  let chatroomIds = selectChatroomIds(state);
  return {
    chatrooms,
    chatroomIds,
    userChatroomIds,
    currentUser: state.session.currentUser,
    currentUserName: state.entities.users[state.session.currentUser].username,
    getDMName
  };
};

const mDTP = dispatch => ({
  fetchChatrooms: () => dispatch(fetchChatrooms()),
  updateChatroomUser: chatroomUser =>
    dispatch(updateChatroomUser(chatroomUser)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  fetchChatroom: id => dispatch(fetchChatroom(id))
});

const SidebarContainer = withRouter(
  connect(
    mSTP,
    mDTP
  )(Sidebar)
);

export default SidebarContainer;
