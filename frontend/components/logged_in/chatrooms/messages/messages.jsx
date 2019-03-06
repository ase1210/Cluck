import React from 'react';
import MessageHeader from './message_header';
import MessageIndex from './message_index';
import MessageForm from './message_form';


const Loading = () => (
  <div className='loader'></div>
)



const Messages = (props) => (
  <div className="messages-parent">
    {
      props.activeChatroom
        ?
        <>
          <MessageHeader activeChatroom={props.activeChatroom} />
          <MessageIndex />
          <MessageForm activeChatroom={props.activeChatroom} />
        </>
        :
        <Loading />
    }
  </div>
)

export default Messages;