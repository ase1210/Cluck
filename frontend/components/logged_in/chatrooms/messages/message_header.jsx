import React from 'react';

const MessageHeader = (props) => (
  <>
    <header>
      <p>#{props.activeChatroom.name}</p>
    </header>
  </>
)

export default MessageHeader;