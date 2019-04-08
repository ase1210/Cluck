import React from "react";

const MessageHeader = props => (
  <>
    <header>
      <p>
        # {props.getDMName(props.activeChatroom.name, props.currentUserName)}
      </p>
    </header>
  </>
);

export default MessageHeader;
