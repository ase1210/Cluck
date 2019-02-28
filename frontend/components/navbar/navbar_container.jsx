import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

const NavBarContainer = connect(mSTP, mDTP)(NavBar);

export default NavBarContainer;