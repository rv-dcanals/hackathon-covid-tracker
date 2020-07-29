import React, { useEffect } from 'react';
import firebase from "./Firebase/firebase.js";
import './App.css';
import Stateselect from './components/StateSelect';

const setData = () => {
  const data = {
    allVisits: 0,
    allMapLoads: 0,
    countries: {
      US: {
        name: "United States",
        visits: 0,
        mapLoads: 0,
        events: {
          riskQuiz: {
            numTaken: 0,
            home: {
              yes: 0,
              no: 0,
            },
            mask: {
              yes: 0,
              no: 0,
            },
            age: {
              "0-9": 0,
              "10-19": 0,
              "20-29": 0,
              "30-39": 0,
              "40-49": 0,
              "50-59": 0,
              "60-69": 0,
              "70-79": 0,
              "80+": 0,
            },
            sex: {
              male: 0,
              female: 0,
              nonbinary: 0,
              other: 0,
            },
            knowCovid: {
              yes: 0,
              no: 0,
            },
          },
        },
        states: {
          AL: { 
            name: "Alabama",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          AK: { 
            name: "Alaska",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          AS: {
            name: "American Samoa",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          AZ: {
            name: "Arizona", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          AR: {
            name: "Arkansas", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          CA: {
            name: "California", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          CO: {
            name: "Colorado", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          CT: {
            name: "Connecticut", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          DE: {
            name: "Delaware", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          DC: { 
            name: "District of Columbia", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          FM: {
            name: "Federated States of Micronesia", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          FL: {
            name: "Florida", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          GA: {
            name: "Georgia", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          GU: {
            name: "Guam", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          HI: {
            name: "Hawaii", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          ID: {
            name: "Idaho", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          IL: {
            name: "Illinois", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          IN: {
            name: "Indiana", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          IA: { 
            name: "Iowa", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          KS: {
            name: "Kansas", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          KY: {
            name: "Kentucky", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          LA: {
            name: "Louisiana", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          ME: {
            name: "Maine", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MH: {
            name: "Marshall Islands", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MD: {
            name: "Maryland", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MA: {
            name: "Massachusetts", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MI: {
            name: "Michigan", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MN: {
            name: "Minnesota", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MS: {
            name: "Mississippi", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MO: {
            name: "Missouri", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MT: {
            name: "Montana", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NE: {
            name: "Nebraska", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NV: {
            name: "Nevada", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NH: {
            name: "New Hampshire", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NJ: {
            name: "New Jersey", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NM: {
            name: "New Mexico", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NY: {
            name: "New York", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          NC: {
            name: "North Carolina", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          ND: {
            name: "North Dakota", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          MP: {
            name: "Northern Mariana Islands", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          OH: {
            name: "Ohio", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          OK: {
            name: "Oklahoma", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          OR: {
            name: "Oregon", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          PW: {
            name: "Palau", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          PA: {
            name: "Pennsylvania", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          PR: {
            name: "Puerto Rico", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          RI: {
            name: "Rhode Island", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          SC: {
            name: "South Carolina", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          SD: {
            name: "South Dakota", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          TN: {
            name: "Tennessee", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          TX: {
            name: "Texas", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          UT: {
            name: "Utah", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          VT: {
            name: "Vermont", 
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          VI: {
            name: "Virgin Islands",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          VA: {
            name: "Virginia",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          WA: {
            name: "Washington",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          WV: {
            name: "West Virginia",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          WI: {
            name: "Wisconsin",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
          WY: {
            name: "Wyoming",
            visits: 0,
            mapLoads: 0,
            events: {
              riskQuiz: {
                numTaken: 0,
                home: {
                  yes: 0,
                  no: 0,
                },
                mask: {
                  yes: 0,
                  no: 0,
                },
                age: {
                  "0-9": 0,
                  "10-19": 0,
                  "20-29": 0,
                  "30-39": 0,
                  "40-49": 0,
                  "50-59": 0,
                  "60-69": 0,
                  "70-79": 0,
                  "80+": 0,
                },
                sex: {
                  male: 0,
                  female: 0,
                  nonbinary: 0,
                  other: 0,
                },
                knowCovid: {
                  yes: 0,
                  no: 0,
                },
              },
            },
          },
        }
      },
      PR: {
        name: "Puerto Rico",
        visits: 0,
        mapLoads: 0,
        events: {
          riskQuiz: {
            numTaken: 0,
            home: {
              yes: 0,
              no: 0,
            },
            mask: {
              yes: 0,
              no: 0,
            },
            age: {
              "0-9": 0,
              "10-19": 0,
              "20-29": 0,
              "30-39": 0,
              "40-49": 0,
              "50-59": 0,
              "60-69": 0,
              "70-79": 0,
              "80+": 0,
            },
            sex: {
              male: 0,
              female: 0,
              nonbinary: 0,
              other: 0,
            },
            knowCovid: {
              yes: 0,
              no: 0,
            },
          },
        },
      },
      CA: {
        name: "Canada",
        visits: 0,
        mapLoads: 0,
        events: {
          riskQuiz: {
            numTaken: 0,
            home: {
              yes: 0,
              no: 0,
            },
            mask: {
              yes: 0,
              no: 0,
            },
            age: {
              "0-9": 0,
              "10-19": 0,
              "20-29": 0,
              "30-39": 0,
              "40-49": 0,
              "50-59": 0,
              "60-69": 0,
              "70-79": 0,
              "80+": 0,
            },
            sex: {
              male: 0,
              female: 0,
              nonbinary: 0,
              other: 0,
            },
            knowCovid: {
              yes: 0,
              no: 0,
            },
          },
        },
      },
      BR: {
        name: "Brazil",
        visits: 0,
        mapLoads: 0,
        events: {
          riskQuiz: {
            numTaken: 0,
            home: {
              yes: 0,
              no: 0,
            },
            mask: {
              yes: 0,
              no: 0,
            },
            age: {
              "0-9": 0,
              "10-19": 0,
              "20-29": 0,
              "30-39": 0,
              "40-49": 0,
              "50-59": 0,
              "60-69": 0,
              "70-79": 0,
              "80+": 0,
            },
            sex: {
              male: 0,
              female: 0,
              nonbinary: 0,
              other: 0,
            },
            knowCovid: {
              yes: 0,
              no: 0,
            },
          },
        },
      },
      GB: {
        name: "United Kingdom",
        visits: 0,
        mapLoads: 0,
        events: {
          riskQuiz: {
            numTaken: 0,
            home: {
              yes: 0,
              no: 0,
            },
            mask: {
              yes: 0,
              no: 0,
            },
            age: {
              "0-9": 0,
              "10-19": 0,
              "20-29": 0,
              "30-39": 0,
              "40-49": 0,
              "50-59": 0,
              "60-69": 0,
              "70-79": 0,
              "80+": 0,
            },
            sex: {
              male: 0,
              female: 0,
              nonbinary: 0,
              other: 0,
            },
            knowCovid: {
              yes: 0,
              no: 0,
            },
          },
        },
      },
      MX: {
        name: "Mexico",
        visits: 0,
        mapLoads: 0,
        events: {
          riskQuiz: {
            numTaken: 0,
            home: {
              yes: 0,
              no: 0,
            },
            mask: {
              yes: 0,
              no: 0,
            },
            age: {
              "0-9": 0,
              "10-19": 0,
              "20-29": 0,
              "30-39": 0,
              "40-49": 0,
              "50-59": 0,
              "60-69": 0,
              "70-79": 0,
              "80+": 0,
            },
            sex: {
              male: 0,
              female: 0,
              nonbinary: 0,
              other: 0,
            },
            knowCovid: {
              yes: 0,
              no: 0,
            },
          },
        },
      },
    }
  }

  const allVisits = data.allVisits;
  const allMapLoads = data.allMapLoads;
  const countries = data.countries;

  firebase.database()
    .ref("allData")
    .set({
      allVisits
    });

    firebase.database()
    .ref("allData")
    .set({
      allMapLoads
    });

    firebase.database()
    .ref("allData")
    .set({
      countries
    });
}

function App() {

  //Testing backend to frontend connection
  useEffect(() => {
    fetch('http://localhost:3000/totalData')
      .then(response => response.json())
      .then(data => {
        console.log(data.text);
      });
      // setData();
  })

  //Gets the location
  useEffect(() => {
    fetch('http://ip-api.com/json/')
      .then(response => response.json())
      .then(data => {
        console.log(data); //Also has city, longitude, and latitude
        console.log(data.region); //This is the 2-letter state name
      });
  })

  return (
    <div className="App">
        {/* <Title name="COVID Tracker"/> */}
        <Stateselect name="hello"/>
    </div>
  );
}

export default App;
