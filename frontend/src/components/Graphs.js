import React, { Component } from 'react'
import { abbrState } from '../functions/stateAbbr.js';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



export default class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log(this.props.historic);

    }

    render() {
        console.log(this.props.historic[0])
        const options = {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Positive COVID Results in NC"
            },
            axisY: {
                title: "Positive Results",
                includeZero: false,
            },
            data: [
                {
                    type: "area",
               
                    yValueFormatString: "#,##0.## Million",
                    dataPoints: [
                        { x: new Date(2020, 6, 23), y: 7.6 },
                        { x: new Date(2020, 6, 24), y: 7.3 },
                        { x: new Date(2020, 6, 25), y: 6.4 },
                        { x: new Date(2020, 6, 26), y: 5.3 },
                        { x: new Date(2020, 6, 27), y: 4.5 },
                        { x: new Date(2020, 6, 28), y: 3.8 },
                        { x: new Date(2020, 6, 29), y: 3.2 }
                    ]
                }
            ]
        }
        return (
            <div>
                <CanvasJSChart options={options} 
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}


