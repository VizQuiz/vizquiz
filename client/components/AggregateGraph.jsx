AggregateGraph = React.createClass({
  getDefaultProps: function() {
    return {
      r: 8
    }
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
            {d.questionIdx}
          </text>
        </g>
      )
    });

    var footerStyle = {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '18%',
      padding: '5px',
      borderRadius: '5px',
      backgroundColor: 'lightgray'
    }

    return (
      <footer style={footerStyle}>
      <svg width='500px' height='210px'>
        {yLabels}
        {dots}
      </svg>
    </footer>
    )
  }
})
