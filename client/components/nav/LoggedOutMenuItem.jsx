LoggedOutMenuItem = React.createClass({
  propTypes: {
    onLogin: React.PropTypes.func.isRequired
  },

  render() {
    let imgStyle = {
      maxHeight: '3em',
      borderRadius: '50%',
      backgroundColor: 'white'
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
            src='images/GitHub-Mark-64px.png'
            onClick={this.props.onLogin}/>
        </li>
        <li></li>
        <li>
          <a href="" onClick={this.props.onLogin}>Create you own surveys!</a>
        </li>
      </ul>
    );
  }
});
