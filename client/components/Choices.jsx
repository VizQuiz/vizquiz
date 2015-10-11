Choices = React.createClass({
  handleClick: function(newIdx, id, evt) {
    var oldIdx = evt.target.parentElement.parentElement.parentElement.getAttribute('data-chosen');
    //console.log(newIdx, oldIdx, id);
    var property;
    var action;
    var inc = {};
    var dec = {};
    var pull = {};

    if (newIdx != oldIdx) {
      property = 'choices.' + newIdx + '.voters';
      var addToSet = {};
      addToSet[property] = Session.get('deviceId');

      property = 'choices.' + newIdx + '.votes';
      inc[property] = 1;

      if (oldIdx >= 0) {
        property = 'choices.' + oldIdx + '.voters';
        pull[property] = Session.get('deviceId');

        property = 'choices.' + oldIdx + '.votes';
        inc[property] = -1;

        action = {
            $addToSet: addToSet,
            $pull: pull,
            $inc: inc
          };
      } else {
        action = {
          $addToSet: addToSet,
          $inc: inc
        };
      }
    } else {
      property = 'choices.' + newIdx + '.voters';
      pull[property] = Session.get('deviceId');

      property = 'choices.' + newIdx + '.votes';
      dec[property] = -1;

      action = {
        $pull: pull,
        $inc: dec
      };
    }

    return SurveyQuestions.update(
      {_id: id},
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
        <li key={index} className={choiceClass}>
          <Choice label={choice.label} checked={selectedChoice} onChange={self.handleClick.bind(self, index, self.props.questionId)} />
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
