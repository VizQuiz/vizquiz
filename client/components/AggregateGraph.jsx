AggregateGraph = React.createClass({
  getDefaultProps: function() {
    return {
      r: 8,
      left: '0'
    }
  },

  handleClick: function(evt) {
    console.log(this.getDOMNode());
  },

  render: function() {
    var self = this;
    var colors = d3.scale.category10();
    colors.domain([0,1,2,3,4,5,6,7,8,9]);

    var xScale = function(n) {
      return (self.props.r * 2) + (self.props.r * 2 * n);
    };

    var yScale = d3.scale.ordinal()
    yScale.domain(this.props.aggData.map(function(d, i) {return d.deviceId;}));
    var yCount = yScale.domain().length;
    yScale.rangeRoundBands([10 + (2 * this.props.r * yCount), 10]);

    var textStyle = {
      fontFamily: 'Verdana',
      fontSize: '0.55rem',
    }

    var yLabels = yScale.domain().map(function(d, i) {

      return (
        <g key={i}>
          <text
            fill={d === Session.get('deviceId') ? 'red' : 'black'}
            style={textStyle}
            x={0}
            y={yScale(d)}
            transform='translate(0, 3)'
          >
            {d.substr(0, 10)}
          </text>
        </g>
      );
    });

    var dots = this.props.aggData.map(function(d, i) {
      return (
        <g key={i} transform='translate(60, 0)'>
          <circle
            fill={colors(d.choiceId)}
            choice={d.choiceId}
            cx={xScale(d.questionIdx)}
            cy={yScale(d.deviceId)}
            r={self.props.r} />
          <text
            fill='white'
            style={textStyle}
            x={xScale(d.questionIdx)}
            y={yScale(d.deviceId)}
            transform='translate(-3, 3)'
          >
            {d.questionIdx + 1}
          </text>
        </g>
      )
    });

    var divStyle = {
      position: 'fixed',
      boxSizing: 'border-box',
      bottom: 0,
      left: this.props.left,
      width: '100%',
      padding: '0 10px',
      height: '6em',
      zIndex: '2',
      borderRadius: '5px',
      backgroundColor: 'rgba(224,224,224,0.7)'
    }
    var hiddenDivStyle = {
      position: 'relative',
      width: '4em',
      bottom: '6em',
      height: '100%'
    }
    return (
      <div style={divStyle}>
        <svg width='100%' height='100%'>
          {yLabels}
          {dots}
        </svg>
        <div style={hiddenDivStyle} onClick={this.handleClick}></div>
      </div>
    )
  }
})
