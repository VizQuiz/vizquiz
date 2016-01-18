ServiceConfiguration.configurations.upsert({service: 'github'}, {
  $set: {
    clientId: Meteor.settings.github.clientId,
    secret: Meteor.settings.github.secret,
    loginStyle: 'popup'
  }
});

function getUserInfo (accessToken) {
  let result = HTTP.get('https://api.github.com/user', {
    headers: {
      'User-Agent': 'Meteor'
    },

    params: {
      access_token: accessToken
    }
  });
  console.log(result.data);
  return _.pick(result.data, 'login', 'email', 'avatar_url');
}

Accounts.onCreateUser((options, user) => {
  user.profile = getUserInfo(user.services.github.accessToken);
  user.login = user.profile.login;
  user.email = user.profile.email;
  return user;
});

Accounts.onLogin((loginInfo) => {
  let user = loginInfo.user;
  let accessToken = user.services.github.accessToken;
  let userInfo = getUserInfo(accessToken);
  Meteor.users.update({_id: user._id}, {
    $set: {
      profile: userInfo,
      login: userInfo.login,
      email: userInfo.email
    }
 });
});
