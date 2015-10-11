Questions = React.createClass({

  render: function () {
    var questionList = this.props.questionList.map(function (question, index) {
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
