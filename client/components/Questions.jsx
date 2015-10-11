Questions = React.createClass({
  getDefaultProps: function () {
    return {
      questions: []
    }
  },

  handleClick: function(checked) {
    console.log('checked')
  },

  renderQuestions: function () {
    return this.props.questions.map(function (question, index) {
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
