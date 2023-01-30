import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.data.map((el) => {
        return <ChartBar label={el.label} />;
      })}
    </div>
  );
};

export default Chart;
