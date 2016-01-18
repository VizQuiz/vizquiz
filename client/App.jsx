Meteor.subscribe('user');

Meteor.startup(function () {
  // var hash = location.hash;
  // if(hash === '') hash = '#99999'
  // Session.set('route', hash.substring(1));
  // console.log(Session.get('route'));

  if (!(localStorage.getItem('deviceId'))) {
    let newId = new Meteor.Collection.ObjectID();
    localStorage.setItem('deviceId', newId._str);
  }
  let myId = localStorage.getItem('deviceId');
  Session.set('deviceId', myId);
  Meteor.call('setUserId', myId);
  Session.set('adminId', false);

  ReactDOM.render(<NavBar />, document.getElementById('vq-nav'));
  ReactDOM.render(<Survey />, document.getElementById('vq-survey'));
})
