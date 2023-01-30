import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const values = props.data.map((el) => el.value);
  const max = Math.max(...values);
  return (
    <div className="chart">
      {props.data.map((el, index) => {
        return (
          <ChartBar
            key={index}
            label={el.label}
            value={el.value}
            maxValue={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
