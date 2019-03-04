import React from 'react';
import { updateChatroomUser } from '../../../../../actions/chatroom_user_actions';

class AddChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      channel: true,
      admin_id: props.currentUser,
      user_ids: [props.currentUser]
    };
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.handleUpdateChatroomUser = this.handleUpdateChatroomUser.bind(this);
  }

  renderErrors() {

    // <p>Don't forget to name your channel.</p>
    // <p>INPUT VALUE is already taken by a channel, username, or user group.</p>
    // <p>Channel names can't contain spaces, periods, or most punctuation. Try again?</p>
    // <p>Blerg, that's a bit too long! Channel name must be fewer than 22 characters.</p>
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleCancelClick(e) {
    e.preventDefault();
    let chatroomId = this.props.match.params.chatroomId;
    let path = `/messages/${chatroomId}`;
    this.props.history.push(path)
  }

  handleCreateChannel(e) {
    e.preventDefault();
    this.props.createChatroom(this.state).then(
      (action) => this.handleUpdateChatroomUser(action.payload)
    );
  }

  handleUpdateChatroomUser(payload) {
    console.log(payload);
    this.props.updateChatroomUser(
      {
        id: Object.keys(payload.chatroomUser)[0],
        status: 'active',
        user_id: this.props.currentUser,
        chatroom_id: Object.keys(payload.chatroom)[0]
      }
    ).then(
      this.props.history.push(`/messages/${Object.keys(payload.chatroom)[0]}`)
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='acf-parent'>
        <div className='add-channel-form'>
          <h1>Create a channel</h1>
          <p className='header-desc'>Channels are where your friends communicate.  They're best when organized around a topic - #music, for example.</p>
          <form onSubmit={this.handleSubmit}>
            <label>Name
            <br />
              <input type="text" placeholder='e.g. music' autoFocus onChange={this.handleInput} />
              <p>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
            </label>
            <div className='buttons'>

              <button className='create' onClick={this.handleCreateChannel}>Create Channel</button>
              <button onClick={this.handleCancelClick}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddChannelForm;