Meteor.methods({
  clickedChoice(questionId, setChecked) {
    console.log('you clicked that shizz yo')
    SurveyQuestions.update( questionId, { $set: {checked: setChecked} });
  }
})
