import React from "react";
import Chart from "./Chart";

const ChartData = (props) => {
  const data = [
    { label: "JAN", value: 0 },
    { label: "FEB", value: 0 },
    { label: "MAR", value: 0 },
    { label: "AVR", value: 0 },
    { label: "MAY", value: 0 },
    { label: "JUI", value: 0 },
    { label: "JUL", value: 0 },
    { label: "AUG", value: 0 },
    { label: "SEP", value: 0 },
    { label: "OCT", value: 0 },
    { label: "NOV", value: 0 },
    { label: "DEC", value: 0 },
  ];
for (const item of props.expensesData){
  const index = item.date.getMonth();
  data[index].value += item.price ;
}

  return (
    <div>
      <Chart data={data} />
    </div>
  );
};

export default ChartData;
