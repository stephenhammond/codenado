Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'services': 1, 'status': 1, 'roles': 1}});
});

Meteor.publish("allUserData", function () {
  return Meteor.users.find();
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true }, { fields: {'status': 1, 'roles': 1} });
});

// allows users to be updated on client. Used to update "roles" field when promoting to presenter
Meteor.users.allow({
  update: function (userId, doc) {
    return true;
  }
});

Meteor.publish("lines", function(){
  return Lines.find();
});

Meteor.publish("chat", function(){
  return chatCollection.find();
});

Meteor.publish("editor", function(){
  return EditorConfig.find();
});