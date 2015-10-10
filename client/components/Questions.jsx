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
          <Choices 
            _id='1' 
            title='The first choice'/>,
          <Choices 
            _id='2' 
            title='The second choice'/>,
          <Choices 
            _id='3' 
            title='The third choice'/>]
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
