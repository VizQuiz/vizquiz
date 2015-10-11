Questions = React.createClass({
  getDefaultProps: function () {
    return {
      questions: []
    }
  },

  render: function () {
    var myQuestions = this.props.questions.map(function (question, index) {
      return <Question key={question._id + index} id={question._id} title={question.title} choices={question.choices}/>
    })
    return (
      <ul>
        {myQuestions}
      </ul>
    )
  }
})
