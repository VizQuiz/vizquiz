Questions = React.createClass({
  getDefaultProps: function () {
    return {
      questions: []
    }
  },
  renderQuestions: function () {
    var questions = [
      {
        _id: 1,
        title: 'hi',
        choices: [
          <Choices title='The first choice'/>,
          <Choices title='The second choice'/>,
          <Choices title='The third choice'/>]

      },

      {
        _id: 2,
        title: 'hello',
        choices: ['one', 'two', 'three']

      }
    ]
    return questions.map(function (question, index) {
      return <Question id={question._id} title={question.title} choices={question.choices}/>
    })
  },

  render: function () {
    var myQuestions = this.renderQuestions()
    return (
    <div>
      {myQuestions}
      </div>
    )
  }
})
