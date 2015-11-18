Meteor.methods({
  setUserId: function(userId) {
    if (!Meteor.user()) {
      this.setUserId(userId);
    }
  }
});
