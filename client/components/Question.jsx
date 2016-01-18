Question = React.createClass({

  render() {
    return (
    <li>
        <div>{this.props.question.label}</div>
        <Choices
          surveyId={this.props.question.surveyId}
          questionId={this.props.question._id}
          questionIdx={this.props.questionIdx}
          choices={this.props.question.choices}/>
    </li>
    )
  }
})
