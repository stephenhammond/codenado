Template.home.events({
  'click .button-app-start': function(e){
    e.preventDefault();

    var hash = Meteor.uuid();
    var lobbyId = hash.substring(hash.length - 7);
    Router.go('/app/' + lobbyId);
  }
});


Template.home.onRendered(function() {

 var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  $(".masthead").css("height", viewportHeight + "px");

});
