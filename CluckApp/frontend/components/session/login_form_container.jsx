import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state) => ({
  formType: "Log In"
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(login(user))
});

const LoginFormContainer = connect(mSTP, mDTP)(SessionForm);

export default LoginFormContainer;