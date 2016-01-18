Meteor.methods({
  setUserId(deviceId) {
    if (!Meteor.user()) {
      this.setUserId(deviceId);
    }
  }
});
