Template.users.events({

  'click li .viewers-dropdown': function (e) {
    e.preventDefault();
    console.log('.');
    $(e.target).closest('.viewers.dropdown-select-list').addClass('dropdown-is-open');
  },

  'blur .viewers .dropdown-top-item': function(){
    $('.viewers.dropdown-select-list.dropdown-is-open').removeClass('dropdown-is-open');
  }

});

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
