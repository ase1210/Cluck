import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedInApp from './logged_in/logged_in_app';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <ProtectedRoute path='/messages' component={LoggedInApp} />
      <AuthRoute exact path='/' component={Splash} />
      <Redirect to='/' />
    </Switch>
  </div>
)

export default App;