Main = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    return {
      questions: SurveyQuestions.find({}).fetch()
    }
  },

  render: function () {
    return (
    <div>
      <Questions questions={this.data.questions} />
    </div>
    );
  }
})
