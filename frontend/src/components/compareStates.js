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
             compareData: [], 
             compareValue: '',
             compareAbbr: ''
         };
         this.handleChange = this.handleChange.bind(this); 
         this.handleSubmit = this.handleSubmit.bind(this); 
    }

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
      };
    
      hideModal = () => {
        this.setState({ 
          show: false, 
          compare: false,
          compareData: [], 
          compareValue: '',
          compareAbbr: ''
        });
      };

      handleChange(event) { 
        this.setState({
          compareValue: event.target.value,
          compareAbbr: abbrState(event.target.value, 'abbr')
        });
      }

      handleSubmit(event){ 
        event.preventDefault(); 
        var updatedState = this.props.data.filter(result => result.state===this.state.compareAbbr)[0]
        console.log(updatedState)
        this.setState({
            compareData: updatedState,
            compare: true
        })
      }

    
    render() { 
        const { stateList } = this.state; 
        const showHideCompareContent = this.state.compare ? "compare-content display-block" : "compare-content display-none";
        let stateOptions = stateList.map((state) => 
            <option key={state} value={state}>{state}</option> 
        );
        return(
          <div>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                  <span onClick={this.hideModal} className="close">&times;</span>
                  <h3>Select the state you want to compare to {this.props.current.state}: </h3>
                  <div>
                    <form className="state-form" onSubmit={this.handleSubmit}>
                            <select className="state-select" value={this.state.value} onChange={this.handleChange} mutiple="true">
                                    {/* <option value="placeholder">Select a State...</option> */}
                                    {stateOptions}
                            </select>
                        <input className="button" type="submit" value="Select"></input>
                    </form>
                  </div>
                  <div className={showHideCompareContent}>
                      <h2 className="compare-header">Comparing {abbrState(this.props.current.state, 'name')} and {abbrState(this.state.compareData.state, 'name')}</h2>
                      <div className="compare-content__info">
                        <div className="compare-info current-data">
                            <h3 className="state-name">{abbrState(this.props.current.state, 'name')}</h3>
                            <h4>Positive Cases: {this.props.current.positive}</h4>
                            <h4>Negative Cases: {this.props.current.negative}</h4>
                        </div>
                        <div className="compare-info selected-data">
                            <h3 className="state-name">{abbrState(this.state.compareData.state, 'name')}</h3>
                            <h4>Positive Cases: {this.state.compareData.positive}</h4>
                            <h4>Negative Cases: {this.state.compareData.negative}</h4>
                        </div>
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
