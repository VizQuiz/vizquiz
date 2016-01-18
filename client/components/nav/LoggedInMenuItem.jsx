LoggedInMenuItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  propTypes: {
    onLogout: React.PropTypes.func.isRequired
  },

  render() {
    let imgStyle = {
      maxHeight: '3em',
      borderRadius: '50%'
    }

    let ulStyle = {
      display: 'flex',
      height: '3em',
      padding: '1em',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      listStyleType: 'none'
    }


    return (
      <ul style={ulStyle}>
        <li>
          <img
            style={imgStyle}
          src={this.data.currentUser.profile.avatar_url} />
        </li>
        <li>
          <ProfileMenu userId={this.data.currentUser.login}/>
        </li>
        <li>
          <a href="" onClick={this.props.onLogout}>Logout</a>
        </li>
      </ul>
        );
  }
});
