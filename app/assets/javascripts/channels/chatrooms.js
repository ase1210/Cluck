//= require cable
//= require_self
//= require_tree ./channels

this.App = {};

App.cable = ActionCable.createConsumer();