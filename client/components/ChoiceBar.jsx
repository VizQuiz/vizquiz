ChoiceBar = React.createClass({

  render() {
    let lineStyle = {stroke: this.props.color, strokeWidth: '5'}
    let svgStyle = {
      verticalAlign: 'top'
    }

    return (
      <div>
        <svg style={svgStyle} zIndex='-1' className='graph' width='250px' height='5px'>
          <g>
            <line className='graph' x1='1' y1='3' x2={this.props.length} y2='3' strokeLinecap='butt' style={lineStyle} />
          </g>
        </svg>
      </div>
    )
  }
})
