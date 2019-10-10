import React from 'react';

// var React = require('react');
// var Component = React.Component;
import CanvasJSReact from './assets/canvasjs.react'

// var CanvasJSReact = require('./assets/canvasjs.react');
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Home extends React.Component {
	render() {
		var dataPoint;
		var total;
		const options = {
			animationEnabled: true,
			title:{
				text: "Sales Analysis"
			},
			data: [{
				type: "funnel",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				indexLabelPlacement: "inside",
				indexLabel: "{label} ({percentage}%)",
				dataPoints: [
					{ y: 1400, label: "Prospects" },
					{ y: 1212, label: "Qualified Prospects" },
					{ y: 1080, label: "Proposals" },
					{ y: 665,  label: "Negotiation" },
					{ y: 578, label: "Final Sales" }
				]
			}]
    }
  //   render() {  //Line Chart
  //     const optionsLine = {
  //   animationEnabled: true,
  //   theme: "light2", 
  //   backgroundColor: "transparent",
  //   title:{
  //     },
  //   axisY: {
  //     includeZero: true,
  //     // suffix: "000",
  //     interval: 5000,
  //     labelFontColor: "white",

  //   },
  //   axisX: {
  //     // title: "Week of Year",
  //     // prefix: "W",
  //     // interval: 1
  //     valueFormatString: "DDD",
  //     labelFontColor: "white",

  //   },
  //   data: [{
  //     type: "line",
  //     yValueFormatString: "####",
  //     xValueFormatString: "DDDD",
  //     lineColor: "white",
  //     markerColor: "white",
  //     dataPoints: [
  //       { x: new Date(0, 0), y: 10000 },
  //       { x: new Date(10, 10), y: 7000 },
  //       { x: new Date(20, 20), y: 14000 },
  //       { x: new Date(30, 30), y: 10000 },
  //       { x: new Date(40, 40), y: 20000 },
  //       { x: new Date(50, 50), y: 17000 },
  //       { x: new Date(60, 60), y: 30000 },
  //     ]
  //   }]
  // }

  //calculate percentage
      dataPoint = options.data[0].dataPoints;
      total = dataPoint[0].y;
      for(var i = 0; i < dataPoint.length; i++) {
        if(i === 0) {
          options.data[0].dataPoints[i].percentage = 100;
        } else {
          options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
        }
      }
		return (
			<div><br/>
        <h1 className="center">Welcome to API integration project with React JS</h1><br/>
					<div >
						<CanvasJSChart options = {options}/>
					</div>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}
export default Home;