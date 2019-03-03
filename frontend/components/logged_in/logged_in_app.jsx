import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import JoinChannelFormContainer from './chatrooms/channels/join_channels/join_channel_form_container';
import ChannelsIndex from './chatrooms/channels/channels_index/channels_index';
import SidebarContainer from './chatrooms/chatrooms_sidebar/sidebar_contrainer';

const LoggedInApp = (props) => (
  <div>
    <Switch>
      <Route exact path='/messages/:chatroomId' component={SidebarContainer} />
      <Route exact path='/messages/:chatroomId/new' component={ChannelsIndex} />
      <Route exact path='/messages/:chatroomId/join' component={JoinChannelFormContainer} />
      <Redirect to='/messages/1' />
    </Switch>
  </div>
)

export default LoggedInApp;