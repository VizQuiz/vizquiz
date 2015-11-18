NavBar = React.createClass({
  render() {
    var navStyle = {
      display: 'flex',
      width: '100%',
      height: '3em',
      borderSizing: 'border-box',
      borderRadius: '5px',
      backgroundColor: 'turquoise'
    }

    return (
      <nav style={navStyle}>
        <LoginMenu />
        this is my nav bar.
        <ProfileLink />
      </nav>
    );
  }
});
