Meteor.publish('user', function () {
  return Meteor.users.find(
    {_id: this.userId},
    {fields: {_id: 1, profile: 1, login: 1, email: 1}}
  );
});
