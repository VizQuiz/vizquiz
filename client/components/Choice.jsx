Choice = React.createClass({

  render: function () {

    var spanStyle = {
      cursor: 'pointer'
    };

    return (
      <span style={spanStyle} onClick={this.props.onClick}>
        <input
          type='checkbox'
          checked={this.props.checked}
          readOnly />
        {this.props.label}
      </span>
    )
  }
})
