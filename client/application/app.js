document.title = "CodeThing";

Template.app.onCreated(function () {

  var pathname = window.location.pathname.split( '/' ).pop();
  Session.set('lobyID', pathname);

  // Code to be rewritten with user data --------------
  randUsername = Session.get('lobyID') + '-' + Math.floor(Math.random() * 10000);
  Session.set('username', randUsername);
  // --------------------------------------------------

});