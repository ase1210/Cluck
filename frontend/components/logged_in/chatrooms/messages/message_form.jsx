import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  clearForm() {
    this.setState({ body: '' });
  }

  handleInput(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = Object.assign(this.state, {
      author_id: this.props.currentUser,
      chatroom_id: this.props.match.params.chatroomId
    });
    this.props.createMessage(message);
    this.clearForm();
  }

  render() {
    return (
      <>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <input type='text'
            placeholder={`Message #${this.props.activeChatroom.name}`}
            onChange={this.handleInput} value={this.state.body} />
          <button></button>
        </form>
      </>
    )
  }
}

export default MessageForm;