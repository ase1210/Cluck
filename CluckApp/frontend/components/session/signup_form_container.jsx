import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state) => ({
  user: { username: "", password: "" },
  formType: "Create Account"
});

const mDTP = (dispatch) => ({
  action: (user) => dispatch(login(user))
});

