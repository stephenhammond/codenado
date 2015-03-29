Template.chatBox.helpers({
  "messages": function() {
    var lobyID = Session.get('lobyID');
    return chatCollection.find({lobyID: lobyID}, {sort: {date_created: -1}, limit: 10});
  }
});

Template.chatBox.events({
  "submit .chat-input-form": function(e) {
    e.preventDefault();
    var $form = $('.chat-input-form')
    var message = $form.find('input').val();
    $form.find('input').val('');
    // var message = $('#chat-message').val();
    var lobyID = Session.get('lobyID');
    var user = Session.get('username');

    chatCollection.insert({
      date_created: Date.now(),
      lobyID: lobyID,
      userId: user,
      message: message
    });
  }
});
