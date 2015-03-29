Template.users.events({

'click li .viewers-dropdown': function (e) {
    e.preventDefault();
    $(e.target).closest('.viewers.dropdown-select-list').addClass('dropdown-is-open');
  },

  'mousedown .dropdown-menu button': function(){
    if (this.role == "viewer") {
      Meteor.users.update(
        { _id: this.id }, {
        $set: { roles: "presenter" }
        });
    }
    else {
      Meteor.users.update(
        { _id: this.id }, {
        $set: { roles: "viewer" }
        });
    }
  },

  'blur .viewers.dropdown-select-list': function(){
    $('.viewers.dropdown-select-list.dropdown-is-open').removeClass('dropdown-is-open');
  }

});

Deps.autorun(function(){
 
  Meteor.subscribe('allUsers');
  Meteor.subscribe('userStatus');

  if ( Meteor.users.find().count() == 1 ) {
    Meteor.users.update(
      { _id: Meteor.userId() }, {
      $set: { roles: "presenter" }
      });
  }

  var usersOnline = Meteor.users.find({ "status.online": true });

  Template.users.helpers({
    presenters: function () {
      var users = [];
      usersOnline.forEach( function(user) {
        console.log(user.roles);
        if (user.roles == "presenter") {
          users.push({
            url: user.profile.avatar_url,
            name: user.profile.name
          });
        }
      });
      return users;
    },
    allUsers: function () {
      var users = [];
      usersOnline.forEach( function(user) {
          users.push({
            id: user._id,
            role: user.roles,
            name: user.profile.name
          });
      });
      return users;
    },
    usersOnlineCount: function () {
      return usersOnline.count();
    },
    roleIs: function(role) {
      return this.role === role;
    }
  });


});
