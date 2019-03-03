import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mSTP = (state) => ({

});

const mDTP = (dispatch) => ({

});

const SidebarContainer = connect(mSTP, mDTP)(Sidebar);

export default SidebarContainer;