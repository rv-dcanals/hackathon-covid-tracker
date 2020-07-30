import React, {Component} from 'react';
import '../styles/StateSelect.css';
import '../styles/buttons.css';
import { abbrState } from '../functions/stateAbbr.js';
import Compare from './compareStates';

export default class StateSelect extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            result: [],
            info: [],
            stateList: [],
            value: abbrState(this.props.location, 'name'),
            valueAbbr: this.props.location, 
            selectedState: [],
            region: this.props.location,
            regionFull: abbrState(this.props.location, 'name'),
            link: '',
            infoData: []
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
                var selectedState = result.filter(data => data.state===this.props.location)
                
                this.setState({ 
                    result: result,
                    info: selectedState[0],
                    stateList: stateNames
                });
                console.log(result)
            }
        )

        fetch("https://covidtracking.com/api/states/info")
        .then(res => res.json())
        .then((result) => {
            var selectedInfo = result.filter(data => data.state===this.props.location)[0]
            this.setState({
                infoData: result,
                link: selectedInfo.covid19Site
            })
        })
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            valueAbbr: abbrState(event.target.value, 'abbr')
        }); 
        if (event.target.value ==="US Virgin Islands") { 
            this.setState({valueAbbr: 'VI'})
        }
    }

    handleSubmit(event) {
        event.preventDefault(); 
        console.log(this.state.valueAbbr)
        var updatedState = this.state.result.filter(data => data.state===this.state.valueAbbr)
        var updatedLink = this.state.infoData.filter(data => data.state===this.state.valueAbbr)[0]
        this.setState({
            info: updatedState[0],
            link: updatedLink.covid19Site
        })
      }

    render() {
        const { info, stateList, link } = this.state; 
        let stateOptions = stateList.map((state) => 
            <option key={state} value={state}>{state}</option> 
        ); 
        return(
        <div className="state-selection">
            <div className ="header-and-dropdown">
                <h1 className="display">{abbrState(info.state, 'name')}</h1>
                <div>
                    <form className="state-form" onSubmit={this.handleSubmit}>
                            <select className="state-select" value={this.state.value} onChange={this.handleChange}>
                                    {/* <option value="placeholder">Select a State...</option> */}
                                    {stateOptions}
                            </select>
                        <input className="button" type="submit" value="Select"></input>
                    </form>
                </div>
            </div>
            <p className="last-update">Last updated: {info.lastUpdateEt} <span style={{fontStyle:'initial'}}>|</span> <a href={link} target="_blank">More information</a></p>
            <div className="data">
                <h3>Positive Cases: {info.positive}</h3>
                <h3>Negative Cases: {info.negative}</h3>
            </div>
            <div>
            {<Compare data={this.state.result} current={this.state.info}/>}
            </div>
        </div>
        )

    }
}