import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors, login } from '../../actions/session_actions';

const mSTP = (state) => ({
  sessionErrors: state.errors.sessionErrors,
  formType: "Signup"
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  demoAction: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm);

export default SignupFormContainer;