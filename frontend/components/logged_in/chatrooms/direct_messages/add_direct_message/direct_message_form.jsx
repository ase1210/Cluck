import React from "react";
import UsersIndexContainer from "../users_index/users_index_container";

class DirectMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
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

  removeSelectedUser() {
    console.log("remove");
  }

  handleCreateDM() {
    console.log("create");
  }

  selectedUsers() {
    return (
      <>
        <div className="dmf-search">
          {this.props.selectedUsers.map(user => {
            return (
              <div
                className="dmf-selected-user"
                key={user.id}
                onClick={this.removeSelectedUser}
              >
                <img src={`${user.avatarURL}`} />
                <div>
                  <span>{user.username}</span>
                  <span className="x">x</span>
                </div>
              </div>
            );
          })}
          <input type="text" autoFocus onChange={this.handleInput} />
        </div>
        <div className="dmf-button" onClick={this.handleCreateDM}>
          Start
        </div>
      </>
    );
  }

  noUsers() {
    return (
      <>
        <div className="dmf-search">
          <input
            type="text"
            autoFocus
            placeholder="Find or start a conversation"
            onChange={this.handleInput}
          />
        </div>
        <div className="dmf-button no-users">Start</div>
      </>
    );
  }

  render() {
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
            {this.props.selectedUsers.length > 0
              ? this.selectedUsers()
              : this.noUsers()}
          </div>
          <div className="presentational" />
          <UsersIndexContainer search={this.state.search} />
        </div>
      </div>
    );
  }
}

export default DirectMessageForm;
