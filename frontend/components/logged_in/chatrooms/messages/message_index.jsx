import React from 'react';
import MessageIndexItem from './message_index_item';

const MessageIndex = (props) => (
  <>
    <section className='message-area'>
      {props.chatroomMessages.map(message => (
        <MessageIndexItem key={message.id} message={message} />
      ))}
    </section>
  </>
)

export default MessageIndex;