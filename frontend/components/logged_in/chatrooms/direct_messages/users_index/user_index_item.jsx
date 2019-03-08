import React from 'react';

const UserIndexItem = (props) => (
  <>
    <img className='dmf-ubc-user-image' src={`${props.user.avatarURL}`} />
    <div className='dmf-ubc-user-info'>
      <span>{props.user.username}</span>
    </div>
  </>
)

export default UserIndexItem;

