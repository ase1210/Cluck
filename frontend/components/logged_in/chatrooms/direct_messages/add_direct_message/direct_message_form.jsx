import React from "react";
import UsersIndexContainer from "../users_index/users_index_container";
import SelectedUserItem from "./selected_user_item";

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleCreateDM = this.handleCreateDM.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleInput(e) {
    this.setState({ search: e.target.value });
  }

  handleEscape() {
    let chatroomId = this.props.match.params.chatroomId;
    let path = `/messages/${chatroomId}`;
    this.props.history.push(path);
  }

  createChatroomInfo() {
    let user_ids = [this.props.currentUser.id];
    let users = [this.props.currentUser.username];

    this.props.selectedUsers.forEach(user => {
      users.push(user.username);
      user_ids.push(user.id);
    });
    users.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
    console.log(users);
    console.log(user_ids);
    let name = users.join(", ");
    return { name, user_ids };
  }

  handleCreateDM() {
    if (this.props.selectedUsers.length > 0) {
      let { name, user_ids } = this.createChatroomInfo();
      let chatroom = {
        name,
        user_ids,
        channel: false,
        admin_id: this.props.currentUser.id
      };
      this.props.createDMChatroom(chatroom).then(action => {
        let id = Object.keys(action.payload.chatroom)[0];
        this.props.history.push(`/messages/${id}`);
      });
    }
  }

  render() {
    let placeholderText = "Find or start a conversation";
    let buttonClass = "dmf-button no-users";
    if (this.props.selectedUsers.length > 0) {
      buttonClass = "dmf-button";
      placeholderText = "Search users";
    }
    return (
      <div className="dmf-parent">
        <div className="direct-message-form">
          <div className="dmf-title">
            <h1>Direct Messages</h1>
            <div className="escape-form" onClick={this.handleEscape}>
              x
            </div>
          </div>
          <div className="dmf-search-parent">
            <div className="dmf-search">
              {this.props.selectedUsers.map(user => {
                return (
                  <SelectedUserItem
                    user={user}
                    key={user.id}
                    removeUserSelection={this.props.removeUserSelection}
                  />
                );
              })}
              <input
                type="text"
                autoFocus
                placeholder={placeholderText}
                onChange={this.handleInput}
              />
            </div>
            <div className={buttonClass} onClick={this.handleCreateDM}>
              Start
            </div>
          </div>
          <div className="presentational" />
          <UsersIndexContainer search={this.state.search} />
        </div>
      </div>
    );
  }
}

export default DirectMessageForm;
