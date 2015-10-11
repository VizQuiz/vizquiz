Choice = React.createClass({

  handleClick: function (e) {
    var choiceId = this.props.choiceId
    console.log('THE CLICK EVENT', this.props)
    var propVal = 'choices.' + choiceId + '.voters'
    var addToSet = {}
    addToSet[propVal] = Session.get('deviceId') 
    SurveyQuestions.update({_id: this.props.questionId}, { $addToSet: addToSet })
  },

  render: function () {
    var selectedChoice = false;
    if (this.props.voters.indexOf(Session.get('deviceId')) >= 0) {
      selectedChoice = true;
    }

    return (
      <div>
        <input
          type='checkbox'
          checked={selectedChoice}
          onClick={this.handleClick}/>
        <span>{this.props.label}</span>
      </div>
    )
  }
})
