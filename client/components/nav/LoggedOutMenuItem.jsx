LoggedOutMenuItem = React.createClass({
  propTypes: {
    onLogin: React.PropTypes.func.isRequired
  },

  render() {
    let liStyle = {
      display: 'block',
      width: '3em',
      height: '2em',
      background: '#4E9CAF',
      padding: '10px',
      textAlign: 'center',
      borderRadius: '5px',
      color: 'white',
      fontWeight: 'bold'
    }

    return (
      <li className="active" style={liStyle}>
        <a href onClick={this.props.onLogin}>
          Login with Github
        </a>
        to create your own surveys.
      </li>
    );
  }
});
