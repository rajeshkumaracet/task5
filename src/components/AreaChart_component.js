import React, { Component } from "react";
import "react-vis/dist/style.css";
import { RadialChart } from "react-vis";

class Pie1 extends Component {
  render() {
    const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }];
    return <RadialChart data={myData} width={230} height={230} />;
  }
}

export default Pie1;
