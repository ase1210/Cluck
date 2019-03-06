import React from 'react';

const MessageIndexItem = (props) => (
  <>
    <div className='message-data'>
      <div className='message-image'>
        <img src='/images/cluck-logo.png' alt-text='profile-image' />
      </div>
      <div className='message-content-area'>

        <div className='message-info'>
          <span className='mi-username'>USERNAME</span>
          <span className='mi-time'>{props.formatDateTime(props.message.createdAt)}</span>
        </div>
        <div className='message-content'>
          <p>{props.message.body}</p>
        </div>
      </div>
    </div>
  </>
)

export default MessageIndexItem;