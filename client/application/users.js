// WORK IN PROGRESS

Deps.autorun(function(){
  if (Meteor.user()) {
    Meteor.subscribe('allUsers');
  }

  var user = Meteor.users.find();

  Template.users.helpers({
    users: function () {
      var userArray = [];
      user.forEach( function(user) { userArray.push(
        { url: user.profile.avatar_url }, 
        { name: user.profile.name }) });
    return userArray;
    }
  });
  
});






