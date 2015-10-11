Choice = React.createClass({

  handleClick: function () {
    // this.props.handleClick(this.props.checked)
    // Meteor.call('clickedChoice', this.props._id, !this.props.checked)
  },

  render: function () {
    var selectedChoice = false;
    if (this.props.voters.indexOf(Session.get('deviceId')) >= 0) {
      selectedChoice = true;
    }

    return (
      <div>
        <input
          type='checkbox'
          checked={selectedChoice}
          onClick={this.handleClick}/>
        <span>{this.props.label}</span>
      </div>
    )
  }
})
