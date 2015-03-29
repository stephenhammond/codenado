document.title = "CodeThing";

Template.app.onCreated(function () {
  // console.log('.');
  var pathname = window.location.pathname.split( '/' ).pop();
  Session.set('lobyID', pathname);
});