import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from 'reactstrap';
import firebase from "../Firebase/firebase.js";
import {homeData, maskData, ageData, sexData, protectionData, infectedData} from "../data/formData.js";
import "../styles/Quiz.css"
//import "./components.css";

const Quiz = ({origin, closeModal}) => {

    const animatedComponents = makeAnimated();
    const [home, setHome] = useState({value: null, label: null});
    const [mask, setMask] = useState({value: null, label: null});
    const [age, setAge] = useState({value: null, label: null});
    const [sex, setSex] = useState({value: null, label: null});
    const [protection, setProtection] = useState([]);
    const [infected, setInfected] = useState({value: null, label: null});

    /*
     * Sends a post request using the state values to the backend
     * where the values are updated accordingly
     * 
     * @param endpoint = the endpoint of the post request 
     * @param value = the abbreviation of the state to add the value to
     * @param results = the results of the quiz in json format
     */
    function updateValue(endpoint, value, results) {
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
                quizResults: results
            }
            )
        })
        .then(response => response.json());
    };

    function submitForm() {
        let formData = {
            home: home.value,
            mask: mask.value,
            age: age.value,
            sex: sex.value,
            protection: "",
            infected: infected.value
        };

        for (let i = 0; i < protection.length; i++) {
            if (i === protection.length - 1) {
                formData.protection += protection[i].label
            } else {
                formData.protection += protection[i].label + ", " 
            }
        }

        const handleFormCompletion = () => {
            firebase.database()
                .ref("QuizData")
                .push(formData);
            updateValue('updateRiskQuiz', origin, formData);
        }
        console.log(formData)
        
        handleFormCompletion();
        closeModal();
    }

    return (
        <div class="Quiz.css">
            <div>
            <question>Are you at home?<br></br></question>
            <Select
                components={animatedComponents}
                options={homeData}
                closeMenuOnSelect={true}
                onChange={(event) => setHome(event)}
            />
            </div>
            <br></br>

            <div>
            <question>When going out, do you wear a mask?<br></br></question>
            <Select
                components={animatedComponents}
                options={maskData}
                closeMenuOnSelect={true}
                onChange={(event) => setMask(event)}
            />
            </div>
            <br></br>

            <div>
            <question>How old are you?<br></br></question>
            <Select
                components={animatedComponents}
                options={ageData}
                closeMenuOnSelect={true}
                onChange={(event) => setAge(event)}
            />
            </div>
            <br></br>

            <div>
            <question>What is your sex?<br></br></question>
            <Select
                components={animatedComponents}
                options={sexData}
                closeMenuOnSelect={true}
                onChange={(event) => setSex(event)}
            />
            </div>
            <br></br>

            <div>
            <question>How do you protect yourself?<br></br></question>
            <Select
                components={animatedComponents}
                options={protectionData}
                isMulti
                closeMenuOnSelect={false}
                onChange={(event) => setProtection(event)}
            />
            </div>
            <br></br>

            <div>
            <question>Do you know anyone with COVID-19?<br></br></question>
            <Select
                components={animatedComponents}
                options={infectedData}
                closeMenuOnSelect={true}
                onChange={(event) => setInfected(event)}
            />
            </div>

            <div>
                <Button variant="primary" onClick={submitForm}>
                    Submit
                </Button>
            </div>
        </div>
    );

}

export default Quiz;