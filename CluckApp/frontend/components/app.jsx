import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact to='/signup' component={SignupFormContainer} />
      <Route exact to='/login' component={LoginFormContainer} />
    </Switch>
  </div>
)

export default App;