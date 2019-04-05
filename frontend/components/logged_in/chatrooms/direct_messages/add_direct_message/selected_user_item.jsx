import React from "react";

const SelectedUserItem = props => (
  <>
    <div
      className="dmf-selected-user"
      onClick={() => props.removeUserSelection(props.user.id)}
    >
      <img src={`${props.user.avatarURL}`} />
      <div>
        <span>{props.user.username}</span>
        <span className="x">x</span>
      </div>
    </div>
  </>
);

export default SelectedUserItem;
