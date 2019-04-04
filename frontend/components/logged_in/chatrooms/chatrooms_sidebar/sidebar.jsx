import React from "react";
import NavBarContainer from "../../../navbar/navbar_container";
import { Link } from "react-router-dom";
import Cable from "actioncable";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToGeneral = this.redirectToGeneral.bind(this);
    this.handleLeaveChatroom = this.handleLeaveChatroom.bind(this);
    this.createSocket = this.createSocket.bind(this);
    this.subscribeAllChatrooms = this.subscribeAllChatrooms.bind(this);
  }

  createSocket(id) {
    let cable;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      cable = Cable.createConsumer("ws://localhost:3000/cable");
    } else {
      cable = Cable.createConsumer("wss://cluck-cluck.herokuapp.com/cable");
    }
    this.chats = cable.subscriptions.create(
      {
        channel: "MessageChannel",
        room: id
      },
      {
        connected: () => {
          console.log(`Connected!! to ${id}`);
        },
        disconnected: () => {
          console.log(`Disconnected!! from ${id}`);
        },
        received: data => {
          console.log(data);
          this.props.receiveMessage(data);
        }
      }
    );
  }

  subscribeAllChatrooms() {
    this.props.userChatroomIds.forEach(id => this.createSocket(id));
  }

  componentDidMount() {
    this.props
      .fetchChatrooms()
      .then(() => this.subscribeAllChatrooms())
      .then(this.redirectToGeneral);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.chatroomId !== this.props.match.params.chatroomId
    ) {
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
      status: "inactive"
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
      <div className="sidebar-parent">
        <div className="sidebar-nav">
          <div className="app-title">Cluck</div>
          <div>
            <NavBarContainer />
          </div>
        </div>
        <div className="presentational" />
        <div className="sidebar">
          <div className="sidebar-data">
            <div className="presentational" />
            <div className="section-header" onClick={this.routeChange("join")}>
              Channels
            </div>
            {this.props.chatrooms.channels.map(channel => {
              let klass =
                channel.id === parseInt(this.props.match.params.chatroomId)
                  ? "selected"
                  : "chatroom";
              return (
                <div className={`${klass}`} key={channel.id}>
                  <Link to={`/messages/${channel.id}`}>
                    <p>#{channel.name}</p>
                  </Link>
                  {this.props.chatrooms.generalChatroomId === channel.id ? (
                    <></>
                  ) : (
                    <span
                      className="leave-chatroom"
                      onClick={this.handleLeaveChatroom(channel.id)}
                    >
                      x
                    </span>
                  )}
                </div>
              );
            })}
            <div className="presentational" />
            <div className="section-header" onClick={this.routeChange("new")}>
              + Add a channel
            </div>
            <div className="presentational" />
            <div className="section-header" onClick={this.routeChange("dm")}>
              Direct Messages
            </div>
            {this.props.chatrooms.directMessages.map(directMessage => {
              let klass =
                directMessage.id ===
                parseInt(this.props.match.params.chatroomId)
                  ? "selected"
                  : "chatroom";
              return (
                <div className={`${klass}`} key={directMessage.id}>
                  <Link to={`/messages/${directMessage.id}`}>
                    <p># {directMessage.name}</p>
                  </Link>
                  <span
                    className="leave-chatroom"
                    onClick={this.handleLeaveChatroom(directMessage.id)}
                  >
                    x
                  </span>
                </div>
              );
            })}
            <div className="presentational" />
            <div className="presentational" />
            <div className="presentational" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
