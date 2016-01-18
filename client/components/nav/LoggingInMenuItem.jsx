LoggingInMenuItem = React.createClass({
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
            src='images/GitHub-Mark-64px.png'
            onClick={this.props.onLogin}/>
        </li>
        <li></li>
        <li>
          <a href="">Logging In. . . </a>
        </li>
      </ul>
    );
  }
});
