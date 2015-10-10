Question = React.createClass({
  getDefaultProps: function () {
    return {
      _id: 1,
      title: '',
      options: ['one', 'two', 'three']

    }
  },

  render: function () {
    var questions = {
      _id: this.props._id,
      title: this.props.title,
      options: this.props.options
    }
    return (
    <li>
        <span>{questions._id}</span>
        <span>{questions.title}</span>
        <span>{questions.options[0]}</span>
      </li>
    )
  }
})
