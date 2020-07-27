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
                // var stateNames = [];
                // for (var i = 0; i < result.length; i++) {
                //     stateNames[i] = result[i].state; 
                // }
                var stateNames = result.map((data) => {
                    return data.state
                });
                this.setState({ 
                    info: result[55],
                    stateList: stateNames
                });
                console.log(stateNames)
            }
        )
    }
    render() {
        const { info, stateList } = this.state; 
        let stateOptions = stateList.map((state) => 
            <a key={state} href="#">{state}</a>
        );
        return(
        <div className="stateselection">
            <div className ="header-and-dropdown">
            <h1 className="display">{info.state}</h1>
                <div className="dropdown">
                    <button className="dropbtn">Select a state</button>
                    <div className="dropdown-content">
                        {stateOptions}
                    </div>
                </div>
            </div>
            <p>Last updated: {info.lastUpdateEt}</p>
        </div>
        )

    }
}