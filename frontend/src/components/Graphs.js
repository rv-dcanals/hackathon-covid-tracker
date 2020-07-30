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
    }

    render() {
        console.log(this.props.current.hospitalizedCurrently)
        const options = {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Positive COVID Results in " + this.props.current.state
            },
            axisY: {
                title: "Positive Results",
                includeZero: false,
            },
            data: [
                {
                    type: "area",
               
                    yValueFormatString: "#,##0.##",
                    dataPoints: [
                        { x: new Date(2020, 6, 23), y: this.props.historic[6] },
                        { x: new Date(2020, 6, 24), y: this.props.historic[5] },
                        { x: new Date(2020, 6, 25), y: this.props.historic[4] },
                        { x: new Date(2020, 6, 26), y: this.props.historic[3] },
                        { x: new Date(2020, 6, 27), y: this.props.historic[2] },
                        { x: new Date(2020, 6, 28), y: this.props.historic[1]},
                        { x: new Date(2020, 6, 29), y: this.props.historic[0]}
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


