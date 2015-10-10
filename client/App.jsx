Meteor.startup(function () {
  if (Meteor.isClient) {
    React.render(<Main />, document.getElementById('vizquiz'))
  }
})
