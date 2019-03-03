import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route path={path}
    render={(props) => (
      loggedIn ? <Redirect to='/messages/1' /> : <Component {...props} />
    )} />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth))

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route path={path}
    render={(props) => (
      loggedIn ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

export const ProtectedRoute = withRouter(connect(mSTP)(Protected))
