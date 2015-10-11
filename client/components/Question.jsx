Question = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    choices: React.PropTypes.array.isRequired
  },

  getDefaultProps: function () {
    return {
      id: '1',
      title: 'Default Question',
      choices: ['one', 'two', 'three']

    }
  },

  render: function () {
    var self = this
    var choices = this.props.choices.map(function(choice, index) {
      return <Choice key={index} choiceId={index} questionId={self.props.id} count={choice.value} label={choice.label} voters={choice.voters} />
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
