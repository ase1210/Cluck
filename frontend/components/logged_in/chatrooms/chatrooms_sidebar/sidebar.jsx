import React from 'react';
import NavBarContainer from '../../../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToGeneral = this.redirectToGeneral.bind(this);
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
      // console.log(this.props.location);
      let path = this.props.location.pathname + `/${destination}`;
      this.props.history.push(path);
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
        <div className='sidebar'>
          <div className='presentational'></div>
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