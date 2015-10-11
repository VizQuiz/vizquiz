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
    var choices = this.props.choices.map(function(choice, index) {
      return <Choice count={choice.value} label={choice.label} voters={choice.voters} />
    });

    return (
    <li>
        <span>{this.props.id}</span>
        <span>{this.props.title}</span>
        <ul>
          <span>{choices}</span>
        </ul>
      </li>
    )
  }
})
