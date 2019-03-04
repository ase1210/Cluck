import React from 'react';

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
    this.props.createChatroom(this.state);
  }

  render() {
    return (
      <div className='acf-parent'>
        <div className='add-channel-form'>
          <h1>Create a channel</h1>
          <p className='header-desc'>Channels are where your friends communicate.  They're best when organized around a topic - #music, for example.</p>
          <form>
            <label>Name
            <br />
              <input type="text" placeholder='e.g. music' autoFocus onChange={this.handleInput} />
              <p>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
            </label>
            <div className='buttons'>

              <button onClick={this.handleCancelClick}>Cancel</button>
              <button className='create' onClick={this.handleCreateChannel}>Create Channel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddChannelForm;