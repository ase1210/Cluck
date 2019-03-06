import React from 'react';


const MessageForm = (props) => (
  <>
    <section className='message-form'>
      <input type='text' placeholder={`Message #${props.activeChatroom.name}`} />
    </section>
  </>
)

export default MessageForm;