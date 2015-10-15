Survey = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    var returnData = {};
    var subMySurvey = Meteor.subscribe('mySurvey', 'hello');
    var subMySurveyAggs = Meteor.subscribe('mySurveyAggs', 'hello');

    if(subMySurvey.ready() === true) {
      returnData.survey = SurveyQuestions.find({}).fetch();
    } else {
      returnData.survey = [];
    }

    if(subMySurveyAggs.ready() === true) {
      returnData.surveyAggs = Surveys.findOne({});
    } else {
      returnData.surveyAggs = {aggData: []};
    }

    return returnData;
  },

  render: function () {
    var questionList = this.data.survey.map(function (question, index) {
      return <Question key={question._id} questionIdx={index} question={question}/>
    });

    var ulStyle = {
      listStyleType: 'none'
    }

    return (
      <ul style={ulStyle}>
        {questionList}
        <AggregateGraph aggData={this.data.surveyAggs.aggData} />
      </ul>
    )
  }
})
