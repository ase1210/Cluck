import React from 'react';

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
      <div className='dmf-parent'>
        <div className='direct-message-form'>
          <div className='dmf-title'>
            <h1>Direct Messages</h1>
            <div className='escape-form' onClick={this.handleEscape}>x</div>
          </div>
          <div className='dmf-search'>
            <input type="text" placeholder='Find or start a conversation' onChange={this.handleInput} />
          </div>
          <div className='presentational'></div>
          <div className='dmf-user-browser-container'>
            <div className='dmf-ubc-user'>
              <div className='dmf-ubc-user-image'>IMG</div>
              <div className='dmf-ubc-user-info'>
                <span>USERNAME</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DirectMessageForm;