Template.chatBox.helpers({
  "messages": function() {
    var lobbyID = Session.get('lobbyID');
    return chatCollection.find({lobbyID: lobbyID}, {sort: {date_created: -1}, limit: 10});
  }
});

Template.chatBox.events({
  "submit .chat-input-form": function(e) {
    e.preventDefault();
    var $form = $('.chat-input-form')
    var message = $form.find('input').val();
    $form.find('input').val('');
    // var message = $('#chat-message').val();
    var lobbyID = Session.get('lobbyID');

    if (Meteor.user()) {
      var user = Meteor.user().profile.name;
    }
    else {
      var user = Session.get('username');
    }

    chatCollection.insert({
      date_created: Date.now(),
      lobbyID: lobbyID,
      userId: user,
      message: message
    });
  }
});

