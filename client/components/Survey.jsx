Survey = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    return {
      survey: SurveyQuestions.find({}).fetch()
    }
  },

  render: function () {
    var questionList = this.data.survey.map(function (question, index) {
      return <Question key={question._id + index} questionId={question._id} label={question.label} choices={question.choices}/>
    })

    var ulStyle = {
      listStyleType: 'none'
    }

    return (
      <ul style={ulStyle}>
        {questionList}
      </ul>
    )
  }
})
