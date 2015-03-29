Template.chatBox.helpers({
  "messages": function() {
    var pathname = window.location.pathname.split( '/' ).pop();
    return chatCollection.find({pathname: pathname}, {sort: {date_created: -1}, limit: 10});
  }
});

Template.chatMessage.helpers({
  "user": function() {

    return "me";

  }
});

Template.chatBox.events({
  "submit .chat-input-form": function(e) {
    e.preventDefault();
    var $form = $('.chat-input-form')
    var message = $form.find('input').val();
    $form.find('input').val('');
    // var message = $('#chat-message').val();
    var pathname = window.location.pathname.split( '/' ).pop();

    chatCollection.insert({
      date_created: Date.now(),
      pathname: pathname,
      userId: 'me',
      message: message
    });

  }
});
