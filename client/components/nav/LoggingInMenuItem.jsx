LoggingInMenuItem = React.createClass({
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
            src='images/GitHub-Mark-120px-plus.png'
          onClick={this.props.onLogin}/>
        </li>
        <li></li>
        <li>
          <button
            className="ui loading button"
          >
            ...
          </button>
        </li>
      </ul>
    );
  }
});
