import React from 'react';

const Messages = (props) => (
  <div className="messages-parent">
    <header className='messages-header'>
      <p>CHATROOM NAME</p>
    </header>
    <section className='message-area'>
      <div className='message-data'>
        <div className='message-image'>
          <p>IMAGE GOES HERE</p>
          {/* <img src='https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=450' alt-text='profile-image'>IMAGE HERE</img> */}
        </div>
        <div>
          <span>USERNAME</span>
          <span>MESSAGE TIME w. Date</span>
        </div>
        <div className='message-content'>
          <p>MESSAGE CONTENT</p>
        </div>
      </div>
      <div className='message-form'>
        <form>
          <input type='text' placeholder='Message #CHATROOM-NAME' />
        </form>
      </div>
    </section>
  </div>
)

export default Messages;