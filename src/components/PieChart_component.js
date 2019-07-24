import React, { Component } from "react";
import "react-vis/dist/style.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

class Pie extends Component {
  render() {
    return (
      <XYPlot xType="linear" width={220} height={220}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 5 },
            { x: 3, y: 15 },
            { x: 4, y: 12 }
          ]}
        />
        <LineSeries data={null} />
        <LineSeries
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 4 },
            { x: 4, y: 2 },
            { x: 5, y: 15 }
          ]}
        />
      </XYPlot>
    );
  }
}

export default Pie;
