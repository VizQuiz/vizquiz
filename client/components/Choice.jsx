Choice = React.createClass({

  render: function () {
    return (
      <span><input
        type='checkbox'
        checked={this.props.checked}
        onChange={this.props.onChange}
      /> {this.props.label}</span>
    )
  }
})
