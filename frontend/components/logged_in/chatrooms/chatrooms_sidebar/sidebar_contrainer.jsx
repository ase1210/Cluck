import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { selectChatrooms } from '../../../../selectors/selectors';

const mSTP = (state) => {
  let chatrooms = selectChatrooms(state);
  return {
    chatrooms
  };
};

const mDTP = (dispatch) => ({
  fetchUserChatrooms: () => dispatch(fetchUserChatrooms())
});

const SidebarContainer = connect(mSTP, mDTP)(Sidebar);

export default SidebarContainer;