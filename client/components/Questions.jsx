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
        options: ['one', 'two', 'three']

      },

      {
        _id: 2,
        title: 'hello',
        options: ['one', 'two', 'three']

      }
    ]
    return questions.map(function (question, index) {
      return <Question id={question._id} title={question.title} options={question.options}/>
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
