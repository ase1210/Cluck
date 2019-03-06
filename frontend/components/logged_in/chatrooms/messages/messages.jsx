import React from 'react';
import MessageHeader from './message_header';
import MessageForm from './message_form';
import MessageIndexContainer from './message_index_container';


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
          <MessageIndexContainer />
          <MessageForm {...props} />
        </>
        :
        <Loading />
    }
  </div>
)

export default Messages;