import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mSTP = (state) => ({
  sessionErrors: state.errors.sessionErrors,
  formType: "Login"
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

const LoginFormContainer = connect(mSTP, mDTP)(SessionForm);

export default LoginFormContainer;