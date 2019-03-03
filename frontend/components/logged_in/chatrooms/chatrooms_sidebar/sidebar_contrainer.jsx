import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { selectChatrooms } from '../../../../selectors/selectors';
import { fetchChatrooms } from '../../../../actions/chatroom_actions';

const mSTP = (state) => {
  let chatrooms = selectChatrooms(state);
  return {
    chatrooms
  };
};

const mDTP = (dispatch) => ({
  fetchChatrooms: () => dispatch(fetchChatrooms())
});

const SidebarContainer = connect(mSTP, mDTP)(Sidebar);

export default SidebarContainer;