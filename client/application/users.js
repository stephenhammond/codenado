// WORK IN PROGRESS

Deps.autorun(function(){
  if (Meteor.user()) {
    Meteor.subscribe('allUsers');
    Meteor.subscribe('userStatus');
  }

  var usersOnline = Meteor.users.find({ "status.online": true });
 console.log(usersOnline);
  Template.users.helpers({
    users: function () {
      var userArray = [];
      usersOnline.forEach( function(user) {
        userArray.push({
          url: user.profile.avatar_url,
          name: user.profile.name
        });
      });
      return userArray;
    }
  });
});






