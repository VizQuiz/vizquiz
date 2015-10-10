Question = React.createClass({
  propTypes: {
    _id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired
  },
  getDefaultProps: function () {
    return {
      _id: 1,
      title: 'Default Question',
      options: ['one', 'two', 'three']

    }
  },

  handleClick: function (e) {
    return this.props.handleClick(e)
  },

  render: function () {
    var questions = {
      _id: this.props._id,
      title: this.props.title,
      options: this.props.options
    }
    return (
    <li>
        <span>{questions._id}</span>
        <span>{questions.title}</span>
        <ul>
          <span>{questions.options[0]} handleClick={this.handleClick}</span>
          <span>{questions.options[1]}</span>
          <span>{questions.options[2]}</span>
        </ul>
      </li>
    )
  }
})
