import React, { Component } from 'react'; 
import '../styles/buttons.css';
import '../styles/stateCompare.css';
import { abbrState } from '../functions/stateAbbr.js';

export default class compareStates extends Component { 
    constructor(props) {
         super(props); 
         this.state = {
             show: false, 
             compare: false,
             stateList: [],
             statesCompare: [],
             statesCompareAbbr: [],
             updatedStateData: [],
         };
         this.handleChange = this.handleChange.bind(this); 
         this.handleSubmit = this.handleSubmit.bind(this); 
    }

    /*
     * Sends a post request using the state values to the backend
     * where the values are updated accordingly
     * 
     * @param endpoint = the endpoint of the post request 
     * @param value = the abbreviation of the state to add the value to
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
              region: value,
          }
          )
      })
      .then(response => response.json());
    };

    componentDidMount() {
        fetch("https://covidtracking.com/api/states")
        .then(res => res.json())
        .then(
            (result) => { 
                var stateNames = result.map((data) => {
                    return abbrState(data.state, 'name');
                });
                this.setState({ 
                    stateList: stateNames
                });
            }
        )
        }

    showModal = () => {
        this.setState({ show: true });
        //Update backend every time the button is clicked for the state of origin
        this.updateValue('compareStateClicked', this.props.data.state);
      };
    
      hideModal = () => {
        this.setState({ 
          show: false, 
          compare: false,
          compareData: [], 
          statesCompare: [],
          statesCompareAbbr: []
        });
      };

      handleChange(event) { 
        this.state.statesCompare.push(event.target.value)
        this.state.statesCompareAbbr.push(abbrState(event.target.value, 'abbr'))
        this.setState({});
        //Update backend on addition of state to comparison
        this.updateValue('stateComparisonAdded', abbrState(event.target.value, 'abbr'));
      }

      handleSubmit(event){ 
        event.preventDefault(); 
        var updatedStates = this.state.statesCompareAbbr.map(state => this.props.data.filter(result => result.state===state)[0])
        this.setState({
            compare: true,
            updatedStateData: updatedStates
        });
        //Update backend every time the comparisons are viewed
        this.updateValue('comparisonViewed', this.props.origin);
        //Update the backend that the current state is being compared to another state
        this.updateValue('stateComparisonAdded', this.props.current.state);
      }

    render() { 
        const { stateList, statesCompare, updatedStateData } = this.state; 
        const showHideCompareContent = this.state.compare ? "compare-content display-block" : "compare-content display-none";
        let stateOptions = stateList.map((state) => 
            <option key={state} value={state}>{state}</option> 
        );
        let compareSelected = statesCompare.map((state) => 
          <li className="selected-list">{state}</li>
        ) 
        
        let compareDisplay = updatedStateData.map((state)=> 
        <div className="compare-info selected-data">
          <h3 className="state-name">{abbrState(state.state, 'name')}</h3>
          <h4>Positive Cases: {state.positive}</h4>
          <h4>Negative Cases: {state.negative}</h4>
        </div>
        )

        return(
          <div>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                  <span onClick={this.hideModal} className="close">&times;</span>
                  <h3>Select the state you want to compare to {abbrState(this.props.current.state, 'name')}: </h3>
                  <div className="form-and-selected-list">
                    <form className="state-form" onSubmit={this.handleSubmit}>
                            <select className="state-select" value={this.state.value} onChange={this.handleChange} mutiple="true">
                                    {stateOptions}
                            </select>
                        <input className="button" type="submit" value="Compare"></input>
                    </form>
                    <div>
                      <h4 className="selected-list">Comparing:</h4>
                      {compareSelected}
                    </div>
                  </div>
                  <div className={showHideCompareContent}>
                      <div className="compare-content__info">
                        <div className="compare-info current-data">
                            <h3 className="state-name">{abbrState(this.props.current.state, 'name')}</h3>
                            <h4>Positive Cases: {this.props.current.positive}</h4>
                            <h4>Negative Cases: {this.props.current.negative}</h4>
                        </div>
                        {compareDisplay}
                      </div>
                  </div>
              </Modal>
              <button className="button" onClick={this.showModal}>Compare States</button>
          </div>
        );
    }
}

const Modal = ({ show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
        </section>
      </div>
    );
  };
