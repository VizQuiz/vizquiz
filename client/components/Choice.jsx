Choice = React.createClass({

  handleClick: function (e) {

    var newChoiceId = this.props.choiceId;
    var questionId = this.props.questionId;

    var addToSet = {};
    var pull = {};
    var propVal = 'choices.' + newChoiceId + '.voters';

    addToSet[propVal] = Session.get('deviceId');
    SurveyQuestions.update({_id: this.props.questionId}, { $addToSet: addToSet });
  },

  render: function () {
    var selectedChoice = false;
    var index = this.props.voters.indexOf(Session.get('deviceId'));
    if (index >= 0) {
      selectedChoice = true;
    }

    return (
      <li>
        <input
          type='checkbox'
          checked={selectedChoice}
          onChange={this.handleClick}/>
        <span>{this.props.label}</span>
      </li>
    )
  }
})
