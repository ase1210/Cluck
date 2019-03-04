import React from 'react';

class AddChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      channel: true,
      admin_id: props.currentUser,
    };
  }

  renderErrors() {

    // <p>Don't forget to name your channel.</p>
    // <p>INPUT VALUE is already taken by a channel, username, or user group.</p>
    // <p>Channel names can't contain spaces, periods, or most punctuation. Try again?</p>
    // <p>Blerg, that's a bit too long! Channel name must be fewer than 22 characters.</p>
  }

  render() {
    return (
      <div>
        <h2>Create a channel</h2>
        <p>Channels are where your friends communicate.  They're best when organized around a topic - #music, for example.</p>
        <form>
          <label>Name
            <br />
            <input type="text" placeholder='e.g. music' />
            <p>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</p>
          </label>
        </form>
      </div>
    )
  }
}

export default AddChannelForm;