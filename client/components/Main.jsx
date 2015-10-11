Main = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    return {
      survey: SurveyQuestions.find({}).fetch()
    }
  },

  render: function () {
    return (
    <div>
      <Questions questionList={this.data.survey} />
    </div>
    );
  }
})
