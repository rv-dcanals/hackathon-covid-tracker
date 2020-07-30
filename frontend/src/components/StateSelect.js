import React, {Component} from 'react';
import '../styles/StateSelect.css';
import '../styles/buttons.css';
import { abbrState } from '../functions/stateAbbr.js';
import Quiz from "./Quiz"
import Compare from './compareStates';
import Graphs from './Graphs';
import Modal from "react-modal"


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
            infoData: [],
            historicData: [],
            positiveHistory: [],
            modalIsOpen: false
        };
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    /*
     * Sends a post request using the state values to the backend
     * where the values are updated accordingly
     * 
     * @param endpoint = the endpoint of the post request 
     * @param value = the value of the state origin (if needed, leave as an empty string otherwise)
     */
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
                region: value === '' ? this.state.valueAbbr : value,
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

        fetch("https://covidtracking.com/api/states/info")
        .then(res => res.json())
        .then((result) => {
            var selectedInfo = result.filter(data => data.state===this.props.location)[0]
            this.setState({
                infoData: result,
                link: selectedInfo.covid19Site
            })
        })

        fetch("https://covidtracking.com/api/v1/states/" + this.props.location.toLowerCase() + "/daily.json")
        .then(res => res.json())
        .then(data => {
           for (var i = 0; i < 7; i++ ) {
               var selected = data[i]
               this.state.positiveHistory.push(selected.positiveIncrease)
           }
           this.setState({
                historicData: data
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
        var updatedState = this.state.result.filter(data => data.state===this.state.valueAbbr)
        var updatedLink = this.state.infoData.filter(data => data.state===this.state.valueAbbr)[0]
        this.setState({
            info: updatedState[0],
            link: updatedLink.covid19Site
        })
        this.updateValue('updateMapLoads', '');
        this.updateValue('updateStateSelect', this.state.region);

        fetch("https://covidtracking.com/api/v1/states/" + this.state.valueAbbr.toLowerCase() + "/daily.json")
        .then(res => res.json())
        .then(data => {
            this.setState({positiveHistory:[]})
            for (var i = 0; i < 7; i++ ) {
                var selected = data[i]
                this.state.positiveHistory.push(selected.positiveIncrease)
            }
           this.setState({
                historicData: data
           })
        })
      }

    openQuiz() {
        this.setState({
            modalIsOpen: true
        })
    }
    closeQuiz() {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        const { info, stateList, link, positiveHistory } = this.state; 
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
                {info.positive && <h3>Total Positive Cases: {info.positive.toLocaleString()}</h3>}
                <br></br>
                {info.negative && <h3>Total Negative Cases: {info.negative.toLocaleString()}</h3>}
            </div>
            <div>
            <div class="two-buttons">
            {<Compare data={this.state.result} current={this.state.info} historic={this.state.positiveHistory}/>}
                          
                          <div className="button" onClick={() => this.openQuiz()}>Take a Quiz!</div>
                          <div>
                              <Modal
                                  isOpen={this.state.modalIsOpen}
                                  onRequestClose={() => this.closeQuiz()}
                                  contentLabel="Example Modal"
                                  ariaHideApp={false}
                              >
                                  <Quiz origin={this.state.region} closeModal={() => this.closeQuiz()}/>
                          </Modal>
                          </div>
            </div>
            {this.state.info && <Graphs data={this.state.result} current={this.state.info} historic={this.state.positiveHistory}/>} 
        </div>
        </div>
        )

    }
}