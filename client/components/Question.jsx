Question = React.createClass({
  propTypes: {
    _id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    choices: React.PropTypes.array.isRequired
  },
  getDefaultProps: function () {
    return {
      _id: 1,
      title: 'Default Question',
      choices: ['one', 'two', 'three']

    }
  },

  render: function () {
    var questions = {
      _id: this.props._id,
      title: this.props.title,
      choices: this.props.choices
    }
    return (
    <li>
        <span>{questions._id}</span>
        <span>{questions.title}</span>
        <ul>
          <span>{questions.choices[0]}</span>
          <span>{questions.choices[1]}</span>
          <span>{questions.choices[2]}</span>
        </ul>
      </li>
    )
  }
})
