document.title = "CodeThing";

Template.app.onCreated(function () {

  var pathname = window.location.pathname.split( '/' ).pop();
  Session.set('lobbyID', pathname);

  setChatname();

});

Template.app.events({
  'click #login-buttons-logout': function(){
    Meteor.logout( function() {
      setChatname();
    });
  },
  'click #login-buttons-github': function(){
    Meteor.loginWithGithub( function() {
      setChatname();
      
    });
  }
});

function setChatname() {
  if (Meteor.users.findOne(Meteor.userId())) {
    var names = Meteor.users.findOne(Meteor.userId()).profile.name.split(' ');
    var chatname = names[0] + ' ' + names[1][0];
    Session.set('chatname', chatname);
  }
  else {
    var username = 'V' + '-' + Math.floor(Math.random() * 1000);
    Session.set('chatname', username);
  }
}