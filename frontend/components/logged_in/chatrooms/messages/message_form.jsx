import React from 'react';


class MessageForm extends React.Component {
  render() {
    return (
      <>
        <section className='message-form'>
          <input type='text' placeholder={`Message #${this.props.activeChatroom.name}`} />
        </section>
      </>
    )
  }
}

export default MessageForm;