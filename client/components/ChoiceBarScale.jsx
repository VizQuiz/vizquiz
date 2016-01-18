ChoiceBarScale = React.createClass({

  render() {
    let textStyle = {
      fontFamily: 'Verdana',
      fontSize: '0.55rem',
    }

    return (
      <li className='scale'>
        <span style={textStyle}>0%</span>
        <svg width='250px' height='5px'>
          <line x1='0' y1='3' x2={'100%'} y2='3' strokeLinecap='butt' style={{stroke: 'black', strokeWidth: '1'}} />
        </svg>
        <span style={textStyle}>100% ({this.props.total} {this.props.total === 1 ? 'vote' : 'votes'})</span>
      </li>
    )
  }
})
