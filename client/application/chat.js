Template.chatBox.helpers({
  "messages": function() {
    var lobbyID = Session.get('lobbyID');
    return chatCollection.find({lobbyID: lobbyID}, {sort: {date_created: -1}, limit: 10});
  }
});

Template.chatBox.events({
  "submit .chat-input-form": function(e) {
    var $form = $('.chat-input-form')
    var lobbyID = Session.get('lobbyID');
    var user = Session.get('chatname');
    var message = $form.find('input').val();
    $form.find('input').val('');
    if (message === ''){
      return false
    } else {
      chatCollection.insert({
        date_created: Date.now(),
        lobbyID: lobbyID,
        userId: user,
        message: message
      });
      return false;
    }
  }
});

