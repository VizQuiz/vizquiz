ChoiceBarScale = React.createClass({

  render: function () {

    return (
      <li className='scale'>
        <span>0%</span>
        <svg width='235px' height='5px'>
          <line x1='0' y1='3' x2={'100%'} y2='3' strokeLinecap='butt' style={{stroke: 'black', strokeWidth: '1'}} />
        </svg>
        <span>100% ({this.props.total} {this.props.total === 1 ? 'vote' : 'votes'})</span>
      </li>
    )
  }
})
