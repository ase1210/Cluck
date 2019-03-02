import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import { ProtectedRoute } from '../../util/route_util';
import ChannelsIndexContainer from '../chatrooms/channels/channels_index_container';

const LoggedInApp = (props) => (
  <div>
    <Switch>
      <Route exact path='/messages/new' component={ChannelsIndexContainer} />
      <Redirect to='/messages' />
    </Switch>
  </div>
)

export default LoggedInApp;