import React from 'react';
import NavBarContainer from '../../../navbar/navbar_container';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChatrooms();
  }
  render() {
    return (
      <>
        <div>
          <h3>Cluck</h3>
          <div>
            <NavBarContainer />
          </div>
        </div>
        <div className='presentational'></div>
        <div>CHANNELS BUTTON</div>
        {this.props.chatrooms.channels.map(channel => (
          <div>
            <p key={channel.id}># {channel.name}</p>
          </div>
        ))}
        <div>CHANNEL NAME</div>
        <div>CHANNEL NAME</div>
        <div>CHANNEL NAME</div>
        <div className='presentational'></div>
        <div>ADD A CHANNEL</div>
        <div className='presentational'></div>
        <div>DIRECT MESSAGES BUTTON +</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
        <div>DM CHAT NAME</div>
      </>
    )
  }
}

export default Sidebar;