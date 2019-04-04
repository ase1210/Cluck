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
            <div className="dmf-search">
              <div className="dmf-selected-user">
                <img src="https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100" />
                <div>
                  <span>Mike </span>
                  <span className="x">x</span>
                </div>
              </div>
              <div className="dmf-selected-user">
                <img src="https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100" />
                <div>
                  <span>Drew</span>
                  <span className="x">x</span>
                </div>
              </div>
              {/* NEED TO ADD LIST OF SELECTED USERS HERE -- if no selected users, then div with placeholder, else */}
              <input
                type="text"
                autoFocus
                placeholder="Find or start a conversation"
                onChange={this.handleInput}
              />
            </div>
            {/* <button className="no-users">Start</button> */}
            <button>Start</button>
          </div>
          <div className="presentational" />
          <UsersIndexContainer search={this.state.search} />
        </div>
      </div>
    );
  }
}

export default DirectMessageForm;
