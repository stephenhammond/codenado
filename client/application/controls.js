Template.controls.events({
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




















