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
      backgroundColor: 'white'
    }

    let ulStyle = {
      display: 'flex',
      WebkitDisplay: 'flex',
      height: '3.5em',
      padding: '1em',
      justifyContent: 'space-between',
      WebkitJustifyContent: 'space-between',
      alignItems: 'center',
      WebkitAlignItems: 'center',
      listStyleType: 'none'
    }


    return (
      <ul style={ulStyle}>
        <li>
          <img
            className='ui tiny circular image'
            style={imgStyle}
            src={this.data.currentUser.profile.avatar_url} />
        </li>
        <li>
          <ProfileMenu userId={this.data.currentUser.login}/>
        </li>
        <li>
          <button
            className="ui icon button"
            onClick={this.props.onLogout}
          >
            Logout
            <i className="right arrow icon"></i>
          </button>
        </li>
      </ul>
    );
  }
});
