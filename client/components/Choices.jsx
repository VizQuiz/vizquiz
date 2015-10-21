Choices = React.createClass({
  handleClick: function(newIdx, qId, sId, evt) {
    var oldIdx = parseInt(evt.target.parentElement.parentElement.parentElement.getAttribute('data-chosen'));
    //console.log(newIdx, oldIdx, qId);
    var property;
    var action;
    var inc = {};
    var dec = {};
    var pull = {};
    var aggDataAdd;
    var aggDataRem;

    if (newIdx != oldIdx) {
      //only do this if there is a change in vote
      property = 'choices.' + newIdx + '.voters';
      var addToSet = {};
      addToSet[property] = Session.get('deviceId');

      property = 'choices.' + newIdx + '.votes';
      inc[property] = 1;

      aggDataAdd = {
        deviceId: Session.get('deviceId'),
        questionIdx: this.props.questionIdx,
        questionId: this.props.questionId,
        choiceId: newIdx
      }

      if (oldIdx >= 0) {
        //when clicking unchecked item but other item is already checked, change vote
        property = 'choices.' + oldIdx + '.voters';
        pull[property] = Session.get('deviceId');

        property = 'choices.' + oldIdx + '.votes';
        inc[property] = -1;

        aggDataRem = {
          deviceId: Session.get('deviceId'),
          questionIdx: this.props.questionIdx,
          questionId: this.props.questionId,
          choiceId: oldIdx
        }

        action = {
            $addToSet: addToSet,
            $pull: pull,
            $inc: inc
          };
      } else {
        //when no items are already checked, add vote
        action = {
          $addToSet: addToSet,
          $inc: inc
        };
      }
    } else {
      //when item clicked is already checked, remove vote
      property = 'choices.' + newIdx + '.voters';
      pull[property] = Session.get('deviceId');

      property = 'choices.' + newIdx + '.votes';
      dec[property] = -1;

      aggDataRem = {
        deviceId: Session.get('deviceId'),
        questionIdx: this.props.questionIdx,
        questionId: this.props.questionId,
        choiceId: newIdx
      }

      action = {
        $pull: pull,
        $inc: dec
      };
    }

    if (aggDataRem) {
      Surveys.update(
        {_id: sId},
        {$pull: {aggData: aggDataRem}}
      );
    }

    if (aggDataAdd) {
      Surveys.update(
        {_id: sId},
        {$addToSet: {aggData: aggDataAdd}}
      );
    }

    return SurveyQuestions.update(
      {_id: qId},
      action
    );
  },

  render: function() {
    var self = this;
    var chosen = -1;
    var choiceSum = 0;
    var colors = d3.scale.category10();

    for (i = 0; i < self.props.choices.length; i++) {
      choiceSum += self.props.choices[i].votes;
    }

    var listChoices = self.props.choices.map(function(choice, index) {
      var choiceClass = 'choice';
      var selectedChoice = false;
      var choicePercent = 0;

      if(choiceSum !== 0) {
        choicePercent = (choice.votes / choiceSum * 100);
      }

      if (choice.voters.indexOf(Session.get('deviceId')) >= 0) {
        choiceClass = 'chosen';
        selectedChoice = true;
        chosen = index;
      }

      return (
        <li key={index}>
          <Choice label={choice.label} checked={selectedChoice} onClick={
              self.handleClick.bind(self, index, self.props.questionId, self.props.surveyId)} />
          <ChoiceBar color={colors(index)} length={choicePercent + '%'} />
        </li>
      );
    });

    var ulStyle = {
      listStyleType: 'none'
    }

    return (
      <ul key={this.props.questionId} style={ulStyle} className='choices' data-chosen={chosen}>
        <ChoiceBarScale total={choiceSum} />
        {listChoices}
      </ul>
    );
  }
});
