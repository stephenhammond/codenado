Template.controls.events({

  'click li .dropdown-top-item': function (e) {
    e.preventDefault();
    $(e.target).parents('.dropdown-select-list').addClass('dropdown-is-open');
  },

  'blur .dropdown-top-item': function(){
    $('.dropdown-select-list.dropdown-is-open').removeClass('dropdown-is-open');
  },

  'submit .viewer-name': function (e) {
    e.preventDefault();
    var newName = e.target.text.value;
    Session.set('chatName', newName);
  }

});

Deps.autorun(function(){
  Template.controls.helpers({
    userIsPresenter: function () {
      if (Meteor.user()) {
        return Meteor.user().roles === "presenter";
      }
    },
    userIsViewer: function () {
      if (Meteor.user()) {
        return Meteor.user().roles === "viewer";
      } 
    }
  });
});




















