# Cluck [<img src="https://github.com/ase1210/Cluck/blob/master/public/images/cluck-logo.png" width='50' alt='cluck-logo' align='right'/>](https://cluck-cluck.herokuapp.com/#/)

[Cluck live](https://cluck-cluck.herokuapp.com/#/)

Cluck is a messaging app clone of Slack.  
The backend is powered by Ruby on Rails while the frontend is built with React/Redux.  
Live chat is enabled through the use of WebSockets.

<img src="https://github.com/ase1210/Cluck/blob/master/README-files/LiveChatExample.gif" width='450' alt='live-chat-gif' align='center'/>

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
1. [Live Chat](#live-chat)
2. [Channels](#channels)

### Live Chat
When a user logs in, Cluck will load all of their active chatrooms and create a unique websocket subscription for each chatroom. This allows users to receive updates when any other user sends a message to one of their active chatrooms. 

The challenge here was to ensure each user receives updates ONLY for their active chatrooms. With a single websocket channel for all messages, any message to any chatroom would broadcast an update to every active user.  In order to limit the broadcast to just the specific chatroom that received the new message, I created "rooms" on the messages websocket channel, each representing a different chatroom. 


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


### Future Features

* Direct messaging
* Group Direct messaging
