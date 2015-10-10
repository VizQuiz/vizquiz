Choices = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'The defualt title',
      _id: 1,
      checked: false
    }
  },
  handleClick: function () {
    this.props.handleClick(this.props.checked)
    Meteor.call('clickedChoice', this.props._id, !this.props.checked)
  },

  render: function () {
    return (
      <div>
        <input
          type='checkbox'
          checked={this.props.checked}
          onClick={this.handleClick}/>
          <span>{this.props.title}</span>
      </div>
    )
  }
})  
