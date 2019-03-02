import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChannelsIndexContainer from '../chatrooms/channels/channels_index_container';
import NavBarContainer from '../navbar/navbar_container';
import JoinChannelFormContainer from './chatrooms/channels/join_channels/join_channel_form_container';
const LoggedInApp = (props) => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path='/messages/channel/new' component={ChannelsIndexContainer} />
      <Route exact path='/messages/channel/join' component={JoinChannelFormContainer} />
      <Redirect to='/messages' />
    </Switch>
  </div>
)

export default LoggedInApp;