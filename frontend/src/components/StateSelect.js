import React, {Component} from 'react'
import '../styles/StateSelect.css';

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
                // for (var i = 0; i < result.length; )
                this.setState({ 
                    info: result[55]
                });
                console.log(result[55])
            }
        )
    }
    render() {
        const { info } = this.state; 
        return(
        <div className="stateselection">
            <div className ="header-and-dropdown">
            <h1 className="display">{info.state}</h1>
                <div className="dropdown">
                    <button className="dropbtn">Select a state</button>
                    <div className="dropdown-content">
                        <a href="#">New York</a>
                        <a href="#">California</a>
                        <a href="#">Florida</a>
                    </div>
                </div>
            </div>
            <p>Last updated: {info.lastUpdateEt}</p>
        </div>
        )
    }
}