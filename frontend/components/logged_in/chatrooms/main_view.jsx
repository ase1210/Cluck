import React from 'react';
import SidebarContainer from './chatrooms_sidebar/sidebar_container';
import MessagesContainer from './messages/messages_container';

const MainView = (props) => (
  <div className='main-view'>
    <SidebarContainer />
    <MessagesContainer />
  </div>
)

export default MainView;