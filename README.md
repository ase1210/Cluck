# Cluck [<img src="https://github.com/ase1210/Cluck/blob/master/public/images/cluck-logo.png" width='50' alt='cluck-logo' align='right'/>](https://cluck-cluck.herokuapp.com/#/)

[Live Site](https://cluck-cluck.herokuapp.com/#/)

Cluck is a messaging app clone of Slack, in which users can live chat with each other in channels or direct message groups. Cluck uses RESTful routes and CRUD to create an interactive user experience in which a user can create, join, and leave chatrooms where they can live chat and message other users. 

<img src="https://github.com/ase1210/Cluck/blob/master/README-files/LiveChatExample.gif" width='450' alt='live-chat-gif' align='center'/>

## Technologies
On the backend, the following technologies were chosen for their ease-of-use and versatility:
  * *Ruby on Rails*
  * *Websockets w. ActionCable* - to allow for live chat
  * *PostgreSQL*
  * *Jbuilder*
  * *Heroku*

For the frontend, I used the following libraries to take advantage of their specific features:

  * *React* - for its modular & reusable components
  * *Redux* - for it's global store and dynamic reducers
  * *AJAX* - for it's backend connection
  * *JavaScript* - for its ability to engage with the browser

## Setup
Clone this repo to your desktop, and from the root directory, run `npm install` to install all the JS dependencies.  
Check out the Gemfile to verify that your system is using the correct versions of Ruby and the other gems.  
Then run `bundle install` to install all of the Ruby dependencies.  
Finally, to set up and seed the database, ensure you have Postgres running, and then run `bundle exex rails db:setup`

## Usage
After you complete the setup, you can run `npm start` and `rails s` from the project's root directory.  You will then be able to access the app at localhost:3000

You can create your own user profile or use the Demo Login button to login as the demo user to explore Cluck's functionality.
To see Live Chat in action, create or log into a profile in one window, and then use an incognito window to log into a second account. Send a message from one profile and see it appear in the other!

## Features
* User accounts are secured with hashed and salted passwords. 
* Users can search available chatrooms to join, or can create new chatrooms to engage and chat with other users.
* Users can leave a chatroom, and rejoin it later to access that chatroom's message history.
* Users can chat in real time with other users through the integration of WebSockets.

### Live Chat & WebSocket Integration
When a user logs in, Cluck will load all of their active chatrooms and create a unique websocket subscription for each chatroom. This allows users to receive updates when any other user sends a message to one of their active chatrooms. 

The challenge I had to overcome was figuring out how to add a user back to a DM chatroom when another user sent them a message. I decided to subscribe all users to a Websocket room with the id of -1 on the MessagesChannel.  If a broadcast came through with a truthy value on the key 'added", I would check to see if the current user's ID was in the list of user ids provided, and would then subscribe them to the room and fetch the chatroom history. 
```JS
// sidebar.jsx

  componentDidMount() {
    this.props
      .fetchChatrooms()
      .then(() => this.subscribeAllChatrooms())
      .then(this.redirectToGeneral);
  }
  
  subscribeAllChatrooms() {
    this.createSocket(-1);
    this.props.userChatroomIds.forEach(id => this.createSocket(id));
  }
  
  createSocket(id) {
    let cable;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      cable = Cable.createConsumer("ws://localhost:3000/cable");
    } else {
      cable = Cable.createConsumer("wss://cluck-cluck.herokuapp.com/cable");
    }
    this.chats = cable.subscriptions.create(
      {
        channel: "MessageChannel",
        room: id
      },
      {
        connected: () => {
          // console.log(`Connected!! to ${id}`);
        },
        disconnected: () => {
          // console.log(`Disconnected!! from ${id}`);
        },
        received: data => {
        // check to see if the user was added to a chatroom through a message, else receive the message
          if (data.added) {
            if (data.userIds.includes(parseInt(this.props.currentUser))) {
              this.createSocket(data.chatroomId);
              this.props.fetchChatroom(data.chatroomId);
            }
          } else {
            this.props.receiveMessage(data);
          }
        }
      }
    );
  }
```

### Channels
Users have the ability to join, leave and create channels.  
  * Joining a channel  
       * When joining a channel, they can use the search bar to filter the channels list.
       * Simply click on a channel to join it. 
  * Leaving a channel  
       * Simply click on the 'x' next to the channel name in the sidebar to leave the channel.
  * Creating a channel  
       * Users can create a channel by clicking on the Add Channel link.  
       * Channel names are limited to lowercase letters, numbers and a few special characters.  
       * Inputs are automatically adjusted to lowercase or rejected if it is not an acceptable character.
