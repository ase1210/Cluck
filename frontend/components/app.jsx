import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Splash from './splash/splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Test from './logged_in';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <ProtectedRoute exact path='/messages' component={Test} />
      <AuthRoute exact path='/' component={Splash} />
      <Redirect to='/' />
    </Switch>
  </div>
)

export default App;