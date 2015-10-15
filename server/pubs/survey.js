Meteor.publish('mySurvey', function(surveyId) {
  return SurveyQuestions.find({});
});

Meteor.publish('mySurveyAggs', function (surveyId) {
  return Surveys.find({});
});
