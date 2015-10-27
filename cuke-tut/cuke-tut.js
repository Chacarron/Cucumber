

WidgetsCollection = new Mongo.Collection('widgets');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.hello.events({
    'click button#createWidget': function () {
      var name = $('input#name').val();

      WidgetsCollection.insert({
        name: name
      });
    }
  });

  Template.hello.helpers({
    widgets: function () {
      return WidgetsCollection.find();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
