import React from 'react';
import SidebarContainer from './chatrooms_sidebar/sidebar_contrainer';
import Messages from './messages/messages';

const MainView = (props) => (
  <div className='main-view'>
    <SidebarContainer />
    <Messages />
  </div>
)

export default MainView;