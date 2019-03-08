# Cluck <img src="https://github.com/ase1210/Cluck/blob/master/public/images/cluck-logo.png" width='50' alt='cluck-logo' align='right'/>

[Cluck live](https://cluck-cluck.herokuapp.com/#/)

Cluck is a messaging app clone of Slack.  
The backend is powered by Ruby on Rails while the frontend is built with React/Redux.  
Live chat is enabled through the use of WebSockets.


## Setup
Clone this repo to your desktop, and from the root directory, run `npm install` to install all the JS dependencies.  
Check out the Gemfile to verify that your system is using the correct versions of Ruby and the other gems. Then run `bundle install` to install all of the Ruby dependencies.  
Finally, to set up and seed the database, ensure you have Postgres running, and then run `bundle exex rails db:setup`

## Usage
After you complete the setup, you can run `npm start` and `rails s` from the project's root directory.  You will then be able to access the app at localhost:3000

You can create your own user profile or use the Demo Login button to login as the demo user to explore Cluck's functionality.
To see Live Chat in action, create or log into a profile in one window, and then use an incognito window to log into a second account (or use the Demo login). Send a message from one profile and see it appear in the other!



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
