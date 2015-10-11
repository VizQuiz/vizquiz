ChoiceBar = React.createClass({

  render: function () {
    var lineStyle = {stroke: this.props.color, strokeWidth: '5'}

    return (
      <div>
        <svg className='graph' width='250px' height='5px'>
          <g>
            <line className='graph' x1='1' y1='3' x2={this.props.length} y2='3' strokeLinecap='butt' style={lineStyle} />
          </g>
        </svg>
      </div>
    )
  }
})
