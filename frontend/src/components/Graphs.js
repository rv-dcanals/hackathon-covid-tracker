import React, {Component} from 'react'
import { abbrState } from '../functions/stateAbbr.js';

export default class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            day1: 20200730,
            day2: 20200729,
            day3: 20200728,
            day4: 20200727,
            day5: 20200726,
            day6: 20200725,
            day7: 20200724,
            
        };
    }

    componentDidMount() {
     }

    render() {
        console.log(this.props.historic)
        return(<h1>hello</h1>)
    }

}
