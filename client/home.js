Template.home.events({
  'click .button-app-start': function(e){
    e.preventDefault();

    var hash = Meteor.uuid();
    var lobbyId = hash.substring(hash.length - 7);
    Session.set('lobbyId', lobbyId);
    Router.go('/app/' + lobbyId);
  }
});
