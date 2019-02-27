import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Home from './splash/home';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/login' component={LoginFormContainer} />
      <Route path='/' component={Home} />
    </Switch>
  </div>
)

export default App;