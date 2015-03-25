// WORK IN PROGRESS

Deps.autorun(function(){
  if (Meteor.user()) {
    Meteor.subscribe('allUsers');
  }
});

var users = Meteor.users;

console.log(users);

Template.users.helpers({
  avatar: function () {
    return Meteor.users.find();
  }
});






