Meteor.startup(function () {
  // seed some survey questions
  SurveyQuestions.remove({});
  Surveys.remove({});
  surveyQs = SurveyQuestions.find();
  if (surveyQs.count() === 0) {
    var sampleQs = [
      {
        surveyId: '99999',
        surveyorId: '77777',
        question: "What's your coding experience?",
        choices: [
          { label: 'Been doing this for years. (>5 yrs)', value: 0, color: 'rgb(114, 147, 203)', voters: []},
          { label: 'Coding away regularly (3-5 yrs)', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Just getting started. (1-2 yrs)', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: "I'm a student. (<1 yr)", value: 0, color: 'rgb(211, 94, 96)', voters: [] }
        ]
      },
      {
        surveyId: '99999',
        surveyorId: '77777',
        question: 'What web framework/platform do you use most these days?',
        choices: [
          { label: 'Meteor', value: 0, color: 'rgb(114, 147, 203)', voters: [] },
          { label: 'Node', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Angular', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'Ember', value: 0, color: 'rgb(211, 94, 96)', voters: [] },
          { label: 'React', value: 0, color: 'rgb(128, 133, 133)', voters: [] },
          { label: 'Rails', value: 0, color: 'rgb(144, 103, 167)', voters: [] },
          { label: 'Django', value: 0, color: 'rgb(171, 104, 87)', voters: [] },
          { label: 'Other', value: 0, color: 'rgb(204, 194, 16)', voters: [] }
        ]
      },
      {
        surveyId: '99999',
        surveyorId: '77777',
        question: 'What web framework/platform would you like to use more?',
        choices: [
          { label: 'Meteor', value: 0, color: 'rgb(114, 147, 203)', voters: [] },
          { label: 'Node', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Angular', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'Ember', value: 0, color: 'rgb(211, 94, 96)', voters: [] },
          { label: 'React', value: 0, color: 'rgb(128, 133, 133)', voters: [] },
          { label: 'Rails', value: 0, color: 'rgb(144, 103, 167)', voters: [] },
          { label: 'Django', value: 0, color: 'rgb(171, 104, 87)', voters: [] },
          { label: 'Other', value: 0, color: 'rgb(204, 194, 16)', voters: [] }
        ]
      },
      {
        surveyId: '99999',
        surveyorId: '77777',
        question: 'Which of these areas of dev do you think needs the most improvement?',
        choices: [
          { label: 'Deployment', value: 0, color: 'rgb(114, 147, 203)', voters: [] },
          { label: 'Tool Chain', value: 0, color: 'rgb(225, 151, 76)', voters: [] },
          { label: 'Dev/Ops', value: 0, color: 'rgb(132, 186, 91)', voters: [] },
          { label: 'Updates/Versioning', value: 0, color: 'rgb(211, 94, 96)', voters: [] },
          { label: 'Other', value: 0, color: 'rgb(128, 133, 133)', voters: [] }
        ]
      },
    ]

    Survey.insert({surveyId: '99999', surveyorId: '77777'})

<<<<<<< Updated upstream
    Surveys.insert({surveyId: '99999', surveyorId: '77777'});

    _.each(sampleQs, function(question) {
      SurveyQuestions.insert(question);
    });
  }

  console.log('Suggestion Count: ' + Surveys.find().count());
  console.log('Questions: ' + SurveyQuestions.find().count());
});
=======
    _.each(sampleQs, function (question) {
      SurveyQuestions.insert(question)
    })
  }

  console.log('Suggestion Count: ' + Suggestions.find().count())
  console.log('Questions: ' + SurveyQuestions.find().count())
})
>>>>>>> Stashed changes
