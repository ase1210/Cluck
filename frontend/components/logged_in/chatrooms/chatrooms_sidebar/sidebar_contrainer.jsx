import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { selectChatrooms, selectChatroomIds } from '../../../../selectors/selectors';
import { fetchChatrooms } from '../../../../actions/chatroom_actions';

const mSTP = (state) => {
  let chatrooms = selectChatrooms(state);
  let chatroomIds = selectChatroomIds(state);
  return {
    chatrooms,
    chatroomIds,
  };
};

const mDTP = (dispatch) => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

const SidebarContainer = connect(mSTP, mDTP)(Sidebar);

export default SidebarContainer;