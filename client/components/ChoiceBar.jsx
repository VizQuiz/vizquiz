ChoiceBar = React.createClass({

  render: function () {
    var lineStyle = {stroke: this.props.color, strokeWidth: '5'}
    var divStyle = {
      marginRight: '1em',
      marginLeft: '1em',
      marginTop: '-0.6em',
      marginBottom: '0.3em'
    }

    return (
      <div style={divStyle}>
        <svg className='graph' width='250px' height='5px'>
          <g>
            <line className='graph' x1='1' y1='3' x2={this.props.length} y2='3' strokeLinecap='butt' style={lineStyle} />
          </g>
        </svg>
      </div>
    )
  }
})
