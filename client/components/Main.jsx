Main = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function () {
    return [
      {
        _id: 1,
        title: 'hi',
        options: ['one', 'two', 'three']

      },

      {
        _id: 2,
        title: 'hello',
        options: ['one', 'two', 'three']

      }
    ]
  },
  render: function () {
    return (
    <div>
        <Questions {...this.state}/>
      </div>
    )
  }
})
