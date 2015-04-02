document.title = "Codenado";

Template.app.onCreated(function() {
  var lobbyId = window.location.pathname.split( '/' ).pop();
  Session.set('lobbyId', lobbyId);
  setChatName();
});

Template.app.onRendered(function(){
  resizeApp();

  $(window).resize(function(){
    resizeApp();
  });

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

function resizeApp(){
  var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var headerHeight = $(".app-header").height();

  var appHeight = (viewportHeight - headerHeight);
  $(".app-primary, .app-sidebar").css("height", appHeight  + "px");

  var tabHeight = $('.tabs-container').height();
  var editorHeight = tabHeight - appHeight;

  $('#editor').css("height", editorHeight  + "px");

}

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
