import React, {Component} from 'react';
import '../styles/StateSelect.css';
import { abbrState } from '../functions/stateAbbr.js';

export default class StateSelect extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            result: [],
            info: [],
            stateList: [],
            value: '',
            valueAbbr: '', 
            selectedState: [],
            region: this.props.location
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    updateValue = (endpoint, value) => {
        fetch('http://localhost:3000/' + endpoint, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(
            {
                country: 'US', 
                region: this.state.valueAbbr,
                value: value
            }
            )
        })
        .then(response => response.json());
    };

    componentDidMount() {
        fetch("https://covidtracking.com/api/states")
        // will ultimately become fetch("https://covidtracking.com/api/states?state=" + the state from the location data)
        .then(res => res.json())
        .then(
            (result) => { 
                var stateNames = result.map((data) => {
                    return abbrState(data.state, 'name');
                });
                var selectedState = result.filter(data => data.state===this.props.location)
                
                this.setState({ 
                    result: result,
                    info: selectedState[0],
                    stateList: stateNames
                });
            }
        )
        }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            valueAbbr: abbrState(event.target.value, 'abbr')
        }); 
    }

    handleSubmit(event) {
        event.preventDefault(); 
        var updatedState = this.state.result.filter(data => data.state===this.state.valueAbbr)
        this.setState({
            info: updatedState[0]
        })
        this.updateValue('updateMapLoads', '');
      }
    
    render() {
        const { info, stateList, link } = this.state; 
        let stateOptions = stateList.map((state) => 
            <option key={state} value={state}>{state}</option> 
        ); 
        return(
        <div className="stateselection">
            <div className ="header-and-dropdown">
                <h1 className="display">{abbrState(info.state, 'name')}</h1>
                <div>
                    <form className="state-form" onSubmit={this.handleSubmit}>
                            <select className="state-select" value={this.state.value} onChange={this.handleChange}>
                                    <option value="placeholder">Select a State...</option>
                                    {stateOptions}
                            </select>
                        <input type="submit" value="Select"></input>
                    </form>
                </div>
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