import React from 'react';
import MessageHeader from './message_header';
import MessageIndex from './message_index';
import MessageForm from './message_form';


const Messages = (props) => (
  <div className="messages-parent">
    <MessageHeader />
    <MessageIndex />
    <MessageForm />
  </div>
)

export default Messages;