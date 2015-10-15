AggregateGraph = React.createClass({
  getDefaultProps: function() {
    return {
      r: 6,
      dotOffset: 100
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
      fill: 'white'
    }

    var yLabels = yScale.domain().map(function(d, i) {
      textStyle.fill = 'black';
      //console.log(d === Session.get('deviceId'));
      if (d === Session.get('deviceId')) {
        console.log(textStyle);
        //textStyle.fill = 'red';
        console.log(textStyle);
      }

      return (
        <g key={i}>
          <text
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

    return (
      <svg width='500px' height='210px'>
        {yLabels}
        {dots}
      </svg>
    )
  }
})
