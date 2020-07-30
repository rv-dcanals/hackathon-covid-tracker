import React, {useState, useEffect} from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Button } from 'reactstrap';
import firebase from "../Firebase/firebase.js";
import {homeData, maskData, ageData, sexData, protectionData, infectedData} from "../data/formData.js";
import "../styles/Quiz.css"
//import "./components.css";

const Quiz = ({closeModal}) => {

    const animatedComponents = makeAnimated();
    const [home, setHome] = useState({value: null, label: null});
    const [mask, setMask] = useState({value: null, label: null});
    const [age, setAge] = useState({value: null, label: null});
    const [sex, setSex] = useState({value: null, label: null});
    const [protection, setProtection] = useState([]);
    const [infected, setInfected] = useState({value: null, label: null});

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
            <question>Are you wearing a mask?<br></br></question>
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