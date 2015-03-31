Template.chatBox.helpers({
  "messages": function() {
    var lobbyId = Session.get('lobbyId');
    return chatCollection.find({lobbyId: lobbyId}, {sort: {date_created: 1}});
  }
});

Template.chatBox.events({
  "submit .chat-input-form": function(e) {
    var $form = $('.chat-input-form')
    var lobbyId = Session.get('lobbyId');
    var user = Session.get('chatName');
    var message = $form.find('input').val().trim();
    $form.find('input').val('');
    if (message === ''){
      return false
    } else {
      chatCollection.insert({
        date_created: Date.now(),
        lobbyId: lobbyId,
        userId: user,
        message: message
      });
      return false;
    }
  }
});

Template.chatMessage.onRendered(function(){
  var el = $('.chat-history');
  el.scrollTop(el[0].scrollHeight);
})
