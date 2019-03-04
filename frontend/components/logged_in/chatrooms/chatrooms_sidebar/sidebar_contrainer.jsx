import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { selectChatrooms, selectChatroomIds } from '../../../../selectors/selectors';
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

const SidebarContainer = connect(mSTP, mDTP)(Sidebar);

export default SidebarContainer;