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

    var divStyle = {
      minWidth: '430px'
    };

    var ulStyle = {
      listStyleType: 'none',
      paddingBottom: '20%'
    };

    return (
      <div style={divStyle}>
        <ul style={ulStyle}>
          {questionList}
        </ul>
        <AggregateGraph aggData={this.data.surveyAggs.aggData} />
      </div>
    )
  }
})
