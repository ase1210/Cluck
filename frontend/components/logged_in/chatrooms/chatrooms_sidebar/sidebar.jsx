import React from 'react';
import NavBarContainer from '../../../navbar/navbar_container';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChatrooms();
  }

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-nav'>
          <div className='app-title'>Cluck</div>
          <div>
            <NavBarContainer />
          </div>
        </div>
        <div className='presentational'></div>

        <div className='sidebar-data'>
          <div className='presentational'></div>
          <div className='section-header'>Channels</div>
          {this.props.chatrooms.channels.map(channel => {
            let klass = (channel.id === parseInt(this.props.match.params.chatroomID)) ?
              "selected" : "chatroom";
            return (
              <div className={`${klass}`} key={channel.id} >
                <p># {channel.name}</p>
              </div>)
          })}
          <div className='selected presentational'></div>
          <div className='presentational'></div>
          <div className='section-header'>+ Add a channel</div>
          <div className='presentational'></div>
          <div className='section-header'>Direct Messages</div>
          {this.props.chatrooms.directMessages.map(directMessage => (
            <div className='chatroom' key={directMessage.id}>
              <p># {directMessage.name}</p>
            </div>
          ))}
          <div className='presentational'></div>
          <div className='presentational'></div>
          <div className='presentational'></div>
        </div>
      </div>
    )
  }
}

export default Sidebar;