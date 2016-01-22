NavBar = React.createClass({
  render() {
    let navStyle = {
      width: '100%',
      height: '3.5em',
      borderSizing: 'border-box',
      borderRadius: '5px',
      backgroundColor: 'turquoise'
    }

    return (
      <nav style={navStyle}>
        <LoginMenu />
      </nav>
    );
  }
});
