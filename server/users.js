Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'services': 1}});
});

Meteor.publish("allUserData", function () {
  return Meteor.users.find({}, {fields: {'avatar_url': 1}});
});