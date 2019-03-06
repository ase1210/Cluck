import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { withRouter } from 'react-router-dom'
import { selectChatrooms, selectChatroomIds } from '../../../../selectors/chatrooms_selectors';
import { fetchChatrooms } from '../../../../actions/chatroom_actions';
import { updateChatroomUser } from '../../../../actions/chatroom_user_actions';

const mSTP = (state) => {
  let chatrooms = selectChatrooms(state);
  let chatroomIds = selectChatroomIds(state);
  return {
    chatrooms,
    chatroomIds,
    currentUser: state.session.currentUser,
  };
};

const mDTP = (dispatch) => ({
  fetchChatrooms: () => dispatch(fetchChatrooms()),
  updateChatroomUser: (chatroomUser) => dispatch(updateChatroomUser(chatroomUser)),
});

const SidebarContainer = withRouter(connect(mSTP, mDTP)(Sidebar));

export default SidebarContainer;