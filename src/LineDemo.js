import React, { Component } from "react";
import { Line, Doughnut } from "react-chartjs-2";

const rawData = [0, 59, 80, 81, 56, 55, 40];
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: ["rgba(75,192,192,0.4)"],
      // borderColor: 'rgba(75,192,192,1)',
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      pointBorderWidth: 100,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: rawData
    }
  ]
};

export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Doughnut
          width={700}
          height={400}
          ref="chart"
          data={data}
          getDatasetAtEvent={dataset => {
            console.log(dataset[0]._datasetIndex);
          }}
          options={{ hover: { mode: true }, legend: { display: false } }}
          onElementsClick={elms => {
            console.log(rawData[elms[0]._index]);
          }}
        />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
