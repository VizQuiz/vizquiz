Question = React.createClass({
  propTypes: {
    questionId: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    choices: React.PropTypes.array.isRequired
  },

  render: function () {
    return (
    <li>
        <div>{this.props.label}</div>
        <div>{this.props.questionId}</div>
        <Choices choices={this.props.choices} questionId={this.props.questionId}/>
    </li>
    )
  }
})
