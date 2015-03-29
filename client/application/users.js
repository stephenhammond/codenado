Template.users.events({

  'click li .viewers-dropdown': function (e) {
    e.preventDefault();
    $(e.target).closest('.viewers.dropdown-select-list').addClass('dropdown-is-open');
  },

  'blur .viewers .dropdown-top-item': function(){
    $('.viewers.dropdown-select-list.dropdown-is-open').removeClass('dropdown-is-open');
  },

  'click button .viewer-promote': function(){
    console.log("you clicked the promote button");
  }

});

Deps.autorun(function(){

  Meteor.subscribe('allUsers');
  Meteor.subscribe('userStatus');

  var usersOnline = Meteor.users.find({ "status.online": true });

  Template.users.helpers({
    presenters: function () {
      var userArray = [];
      usersOnline.forEach( function(user) {
        if (user.roles == "presenter") {
          userArray.push({
            url: user.profile.avatar_url,
            name: user.profile.name
          });
        }
      });
      return userArray;
    },
    allUsers: function () {
      var userArray = [];
      usersOnline.forEach( function(user) {
          userArray.push({
            url: user.profile.avatar_url,
            name: user.profile.name
          });
      });
      return userArray;
    }, 
    updateRoles: function (targetUserId, roles, group) {
      var loggedInUser = Meteor.user();

      if (!loggedInUser ||
          !Roles.userIsInRole(loggedInUser, 
                              ['manage-users','support-staff'], group)) {
        throw new Meteor.Error(403, "Access denied")
      }
      Roles.setUserRoles(targetUserId, roles, group)
    },
    usersOnlineCount: function () {
      return usersOnline.count();
    }
  });


});
