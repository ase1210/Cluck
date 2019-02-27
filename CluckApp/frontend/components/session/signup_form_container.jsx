import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state) => ({
  formType: "Create Account"
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(signup(user))
});

const SignupFormContainer = connect(mSTP, mDTP)(SessionForm);

export default SignupFormContainer;