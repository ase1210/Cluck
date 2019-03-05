import React from 'react';

const Messages = (props) => (
  <div className="messages-parent">
    <header>
      <p>CHATROOM NAME</p>
    </header>
    <section className='message-area'>
      <div className='message-data'>
        <div className='message-image'>
          <img src='/images/cluck-logo.png' alt-text='profile-image' />
        </div>
        <div className='message-content-area'>

          <div className='message-info'>
            <span className='mi-username'>USERNAME</span>
            <span className='mi-time'>MESSAGE TIME w. Date</span>
          </div>
          <div className='message-content'>
            <p>MESSAGE CONTENT</p>
          </div>
        </div>
      </div>
      <div className='message-data'>
        <div className='message-image'>
          <img src='/images/cluck-logo.png' alt-text='profile-image' />
        </div>
        <div className='message-content-area'>

          <div className='message-info'>
            <span className='mi-username'>USERNAME</span>
            <span className='mi-time'>MESSAGE TIME w. Date</span>
          </div>
          <div className='message-content'>
            <p>MESSAGE CONTENT</p>
          </div>
        </div>
      </div>
      <div className='message-data'>
        <div className='message-image'>
          <img src='/images/cluck-logo.png' alt-text='profile-image' />
        </div>
        <div className='message-content-area'>

          <div className='message-info'>
            <span className='mi-username'>USERNAME</span>
            <span className='mi-time'>MESSAGE TIME w. Date</span>
          </div>
          <div className='message-content'>
            <p>MESSAGE CONTENT</p>
          </div>
        </div>
      </div>
      <div className='message-data'>
        <div className='message-image'>
          <img src='/images/cluck-logo.png' alt-text='profile-image' />
        </div>
        <div className='message-content-area'>

          <div className='message-info'>
            <span className='mi-username'>USERNAME</span>
            <span className='mi-time'>MESSAGE TIME w. Date</span>
          </div>
          <div className='message-content'>
            <p>MESSAGE CONTENT</p>
          </div>
        </div>
      </div>
      <div className='message-data'>
        <div className='message-image'>
          <img src='/images/cluck-logo.png' alt-text='profile-image' />
        </div>
        <div className='message-content-area'>

          <div className='message-info'>
            <span className='mi-username'>USERNAME</span>
            <span className='mi-time'>MESSAGE TIME w. Date</span>
          </div>
          <div className='message-content'>
            <p>MESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENTMESSAGE CONTENT</p>
          </div>
        </div>
      </div>
      <div className='message-data'>
        <div className='message-image'>
          <img src='/images/cluck-logo.png' alt-text='profile-image' />
        </div>
        <div className='message-content-area'>

          <div className='message-info'>
            <span className='mi-username'>USERNAME</span>
            <span className='mi-time'>MESSAGE TIME w. Date</span>
          </div>
          <div className='message-content'>
            <p>MESSAGE CONTENT</p>
          </div>
        </div>
      </div>
    </section>
    <section className='message-form'>
      <input type='text' placeholder='Message #CHATROOM-NAME' />
    </section>
  </div>
)

export default Messages;