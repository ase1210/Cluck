import React from 'react';
import NavBarContainer from '../../../navbar/navbar_container';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToGeneral = this.redirectToGeneral.bind(this);
    this.handleLeaveChatroom = this.handleLeaveChatroom.bind(this);
  }

  componentDidMount() {
    this.props.fetchChatrooms().then(
      this.redirectToGeneral);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.chatroomId !== this.props.match.params.chatroomId) {
      this.redirectToGeneral();
    }
  }

  redirectToGeneral() {
    if (!this.props.chatroomIds.includes(this.props.match.params.chatroomId)) {
      let path = `/messages/${this.props.chatrooms.generalChatroomId}`;
      this.props.history.push(path);
    }
  }

  routeChange(destination) {
    return () => {
      let path = this.props.location.pathname + `/${destination}`;
      this.props.history.push(path);
    };
  }

  handleLeaveChatroom(id) {
    let chatroomUser = {
      user_id: this.props.currentUser,
      chatroom_id: id,
      status: 'inactive'
    };
    return () => {
      this.props.updateChatroomUser(chatroomUser);
      if (parseInt(this.props.match.params.chatroomId) === id) {
        let path = `/messages/${this.props.chatrooms.generalChatroomId}`;
        this.props.history.push(path);
      }
    };
  }

  render() {
    return (
      <div className='sidebar-parent'>
        <div className='sidebar-nav'>
          <div className='app-title'>Cluck</div>
          <div>
            <NavBarContainer />
          </div>
        </div>
        <div className='presentational'></div>
        <div className='sidebar'>
          <div className='sidebar-data'>
            <div className='presentational'></div>
            <div className='section-header' onClick={this.routeChange('join')}>Channels</div>
            {this.props.chatrooms.channels.map(channel => {
              let klass = (channel.id === parseInt(this.props.match.params.chatroomId)) ?
                "selected" : "chatroom";
              return (
                <div className={`${klass}`} key={channel.id} >
                  <Link to={`/messages/${channel.id}`}>
                    <p># {channel.name}</p>
                  </Link>
                  {
                    (this.props.chatrooms.generalChatroomId === channel.id)
                      ? <></> :
                      <span className='leave-chatroom' onClick={this.handleLeaveChatroom(channel.id)}>x</span>
                  }
                </div>)
            })}
            <div className='presentational'></div>
            <div className='section-header' onClick={this.routeChange('new')}>+ Add a channel</div>
            <div className='presentational'></div>
            <div className='section-header'>Direct Messages</div>
            {this.props.chatrooms.directMessages.map(directMessage => {
              let klass = (directMessage.id === parseInt(this.props.match.params.chatroomId)) ?
                "selected" : "chatroom";
              return (
                <div className={`${klass}`} key={directMessage.id} >
                  <Link to={`/messages/${directMessage.id}`}>
                    <p># {directMessage.name}</p>
                  </Link>
                  <span className='leave-chatroom' onClick={this.handleLeaveChatroom(directMessage.id)}>x</span>

                </div>)
            })}
            <div className='presentational'></div>
            <div className='presentational'></div>
            <div className='presentational'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;