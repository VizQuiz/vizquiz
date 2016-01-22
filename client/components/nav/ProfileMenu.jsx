ProfileMenu = React.createClass({
  componentDidMount() {
    $('.ui.dropdown').dropdown();
  },

  render() {
    return (
      <div className="ui text menu">
        <div className="ui dropdown item">
        {this.props.userId}
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Home</div>
            <div className="item">My Surveys</div>
            <div className="item">Prefs</div>
          </div>
        </div>
      </div>
    );
  }
});
