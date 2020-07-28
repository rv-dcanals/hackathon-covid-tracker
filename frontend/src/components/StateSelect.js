import React, {Component} from 'react';
import '../styles/StateSelect.css';
import { abbrState } from './stateAbbr.js';

export default class StateSelect extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            info: [],
            stateList: []
        };
    }



    componentDidMount() { 
        fetch("https://covidtracking.com/api/states")
        // will ultimately become fetch("https://covidtracking.com/api/states?state=" + the state from the location data)
        .then(res => res.json())
        .then(
            (result) => { 
                var stateNames = result.map((data) => {
                    return abbrState(data.state, 'name');
                });
                // var selectedState = result.filter(data => data.state==="CT")
                this.setState({ 
                    info: result[7],
                    stateList: stateNames
                });
            }
        )
    }
    
    render() {
        const { info, stateList } = this.state; 

        let stateOptions = stateList.map((state) => 
            <option key={state}>{state}</option>
            //todo: set up clicking on button and changing data 
        );
       
        return(
        <div className="stateselection">
            <div className ="header-and-dropdown">
            <h1 className="display">{abbrState(info.state, 'name')}</h1>
            <select name='state-select' id="state-select">
                    <option>Select a State...</option>
                    {stateOptions}
            </select>
            </div>
            <div>
                
            </div>
            <p>Last updated: {info.lastUpdateEt}</p>
            <div className="data">
                <h3>Positive Cases: {info.positive}</h3>
                <h3>Negative Cases: {info.negative}</h3>
            </div>
        </div>
        )

    }
}