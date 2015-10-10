Choices = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'The defualt title'
    }
  },
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
    onClick={ this.handleClick() }/>
    <span>{this.props.title}</span>
      </div>
    }
    )
  }
})
