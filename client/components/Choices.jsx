Choices = React.createClass({
  handleClick: function (e) {
    Meteor.call('clickedChoice', e)
  },
  render: function () {
    return (
    <div>
        <input
    type='checkbox'
    readOnly={ true }
    checked={ this.props.choice.checked }
    onClick={ this.handleClick() }
    />
      </div>
    )
  }
})
