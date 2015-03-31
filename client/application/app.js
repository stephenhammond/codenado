document.title = "CodeThing";

Template.app.onCreated(function() {
  var pathname = window.location.pathname.split( '/' ).pop();
  Session.set('lobbyId', pathname);
  setChatName();
});

Template.app.events({
  'click #login-buttons-logout': function(){
    Meteor.logout( function() {
      setChatName();
    });
  },
  'click #login-buttons-github': function(){
    Meteor.loginWithGithub( function() {
      setChatName();
    });
  }
});

function setChatName() {
  if (Meteor.users.findOne(Meteor.userId())) {
    var names = Meteor.users.findOne(Meteor.userId()).profile.name.split(' ');
    var chatName = names[0] + ' ' + names[1][0];
    Session.set('chatName', chatName);
  }
  else {
    var username = 'V' + '-' + Math.floor(Math.random() * 1000);
    Session.set('chatName', username);
  }
}
