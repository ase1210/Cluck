import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import JoinChannelFormContainer from './chatrooms/channels/join_channels/join_channel_form_container';
import ChannelsIndex from './chatrooms/channels/channels_index/channels_index';
const LoggedInApp = (props) => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path='/messages/channel/new' component={ChannelsIndex} />
      <Route exact path='/messages/channel/join' component={JoinChannelFormContainer} />
      <Redirect to='/messages' />
    </Switch>
  </div>
)

export default LoggedInApp;