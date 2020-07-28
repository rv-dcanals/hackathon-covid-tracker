import React, {Component} from 'react';
import '../styles/StateSelect.css';
import { abbrState } from './stateAbbr.js';

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
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
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
                var selectedState = result.filter(data => data.state==="PR")
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
        this.setState({updateThis: "update"})
        var updatedState = this.state.result.filter(data => data.state===this.state.valueAbbr)
        this.setState({
            info: updatedState[0]
        })
      }
    
    render() {
        const { info, stateList } = this.state; 

        let stateOptions = stateList.map((state) => 
            <option key={state} value={state}>{state}</option> 
        ); 
       
        return(
        <div className="stateselection">
            <div className ="header-and-dropdown">
                <h1 className="display">{abbrState(info.state, 'name')}</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                            <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="placeholder">Select a State...</option>
                                    {stateOptions}
                            </select>
                        <input type="submit" value="Submit"></input>
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