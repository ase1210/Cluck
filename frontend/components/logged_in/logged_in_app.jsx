import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import JoinChannelFormContainer from './chatrooms/channels/join_channels/join_channel_form_container';
import SidebarContainer from './chatrooms/chatrooms_sidebar/sidebar_contrainer';
import AddChannelFormContainer from './chatrooms/channels/add_channel/add_channel_form_container';
import MainView from './chatrooms/main_view';

const LoggedInApp = (props) => (
  <div>
    <Switch>
      <Route exact path='/messages/:chatroomId' component={MainView} />
      <Route exact path='/messages/:chatroomId/new' component={AddChannelFormContainer} />
      <Route exact path='/messages/:chatroomId/join' component={JoinChannelFormContainer} />
      <Redirect to='/messages/1' />
    </Switch>
  </div>
)

export default LoggedInApp;