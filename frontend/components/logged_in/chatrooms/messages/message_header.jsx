import React from "react";

const MessageHeader = props => (
  <>
    <header>
      <div className="mh-left">
        <p>
          #{props.getDMName(props.activeChatroom.name, props.currentUserName)}
        </p>
      </div>
      <div className="mh-right">
        <div className="mh-search">
          <i className="fas fa-search" />
          <input type="text" disabled placeholder="Search (coming soon)" />
        </div>
        <div className="mh-icons">
          <i className="fas fa-at" />
          <i className="far fa-star" />
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
    </header>
  </>
);

export default MessageHeader;
