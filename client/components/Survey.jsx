Survey = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let returnData = {};
    let subMySurvey = Meteor.subscribe('mySurvey', 'hello');
    let subMySurveyAggs = Meteor.subscribe('mySurveyAggs', 'hello');

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

  render() {
    let questionList = this.data.survey.map(function (question, index) {
      return <Question key={question._id} questionIdx={index} question={question}/>
    });

    let divStyle = {

    };

    let ulStyle = {
      paddingBottom: '6em',
      paddingLeft: '2em'
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
