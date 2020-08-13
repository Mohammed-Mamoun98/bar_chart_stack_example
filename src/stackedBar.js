import React, { Component } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";

const rawData = [[10, 20], 59, 80, 81, 56, 55, 40];
const options = {
  scales: {
    xAxes: [
      {
        stacked: false,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        stacked: false,
        gridLines: {
          display: false
        }
      }
    ]
  }
};

let _data = {
  datasets: [
    {
      label: "test1",
      data: [1, 5],
      backgroundColor: "red"
    },
    {
      label: "test2",
      data: [2, 12],
      backgroundColor: "purple"
    }
  ],
  labels: ["label", "label 1"]
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.1,
      backgroundColor: [
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)"
      ],
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

export default class StackedDemo extends Component {
  render() {
    return (
      <div>
        <h2>Stack Example</h2>
        <Bar
          width={700}
          height={400}
          ref="chart"
          data={_data}
          options={options}
          getDatasetAtEvent={(dataset) => {
            console.log(dataset[0]._datasetIndex);
          }}
          // options={{ hover: { mode: true }, legend: { display: false } }}
          onElementsClick={(elms) => {
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
