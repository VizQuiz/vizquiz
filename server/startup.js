Meteor.startup(function () {
  // seed some survey questions
  //  SurveyQuestions.remove({});
  //  Surveys.remove({});

  if (Surveys.find().count() === 0) {
    surveyId = Surveys.insert({surveyorId: '77777', aggData: []});

    surveyQs = SurveyQuestions.find({surveyId: surveyId});
    if (surveyQs.count() === 0) {
      var sampleQs = [
        {
          surveyId: surveyId,
          surveyorId: '77777',
          label: "What's your coding experience?",
          choices: [
            { label: 'Been doing this for years. (>5 yrs)', votes: 0, voters: []},
            { label: 'Coding away regularly (3-5 yrs)', votes: 0, voters: [] },
            { label: 'Just getting started. (1-2 yrs)', votes: 0, voters: [] },
            { label: "I'm a student. (<1 yr)", votes: 0, voters: [] }
          ]
        },
        {
          surveyId: surveyId,
          surveyorId: '77777',
          label: 'What web framework/platform do you use most these days?',
          choices: [
            { label: 'Meteor', votes: 0, voters: [] },
            { label: 'Node', votes: 0, voters: [] },
            { label: 'Angular', votes: 0, voters: [] },
            { label: 'Ember', votes: 0, voters: [] },
            { label: 'React', votes: 0, voters: [] },
            { label: 'Rails', votes: 0, voters: [] },
            { label: 'Django', votes: 0, voters: [] },
            { label: 'Other', votes: 0, voters: [] }
          ]
        },
        {
          surveyId: surveyId,
          surveyorId: '77777',
          label: 'What web framework/platform would you like to use more?',
          choices: [
            { label: 'Meteor', votes: 0, voters: [] },
            { label: 'Node', votes: 0, voters: [] },
            { label: 'Angular', votes: 0, voters: [] },
            { label: 'Ember', votes: 0, voters: [] },
            { label: 'React', votes: 0, voters: [] },
            { label: 'Rails', votes: 0, voters: [] },
            { label: 'Django', votes: 0, voters: [] },
            { label: 'Other', votes: 0, voters: [] }
          ]
        },
        {
          surveyId: surveyId,
          surveyorId: '77777',
          label: 'Which of these areas of dev do you think needs the most improvement?',
          choices: [
            { label: 'Deployment', votes: 0, voters: [] },
            { label: 'Tool Chain', votes: 0, voters: [] },
            { label: 'Dev/Ops', votes: 0, voters: [] },
            { label: 'Updates/Versioning', votes: 0, voters: [] },
            { label: 'Other', votes: 0, voters: [] }
          ]
        },
      ];

      _.each(sampleQs, function(question) {
        SurveyQuestions.insert(question);
      });
    }
  }

  console.log('Survey Count: ' + Surveys.find().count());
  console.log('Survey Questions: ' + SurveyQuestions.find().count());
});
