const firebase = require("firebase");
const express = require("express");
const process = require("process");
const cors = require("cors");

const app = new express();

//Be able to process post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow cors
app.use(cors())

//Initialize a backend connection to the firebase database
firebase.initializeApp({
  "projectId": "hackathon-covid-tracker",
  "appId": "1:121045019457:web:72984bd6e074b1674a0fc0",
  "databaseURL": "https://hackathon-covid-tracker.firebaseio.com",
  "storageBucket": "hackathon-covid-tracker.appspot.com",
  "locationId": "us-east1",
  "apiKey": "AIzaSyCwQcgSUdv1P1GgBhtBY7mt5HPjpP9Dgrc",
  "authDomain": "hackathon-covid-tracker.firebaseapp.com",
  "messagingSenderId": "121045019457"
});

const sendSuccessCode = (res, val) => {
  const resultObject = {code: "200: Updated " + val + " Successfully"}
  res.send(resultObject);
};

const getCountry = (req) => {
  if (req.body.country != '' && req.body.country != undefined) {
    return firebase.database().ref('allData').child('countries').child(req.body.country);
  }
};

const getState = (req) => {
  if (req.body.country === 'US') {
    return getCountry(req)
      .child('states')
      .child(req.body.region);
  }
};

const verifyCountry = (request) => {
  return (request.body.country != '' && request.body.country != undefined);
}

const incrementEvent = (req, value) => {
  if (req.body.country === 'US') { 
    getState(req).child('events').child(value).set(firebase.database.ServerValue.increment(1));
  }

  //Increment the value by 1 for the country's event
  getCountry(req).child('events').child(value).set(firebase.database.ServerValue.increment(1));
}

const incrementValue = (req, value) => {
  //If country is US, increment that value by 1
  if (req.body.country === 'US') { 
    getState(req).child(value).set(firebase.database.ServerValue.increment(1));
  }

  //Increment the value by 1 for the country
  getCountry(req).child(value).set(firebase.database.ServerValue.increment(1));
}

//Increment the universal value given
const incrementUniversalValue = (value) => {
  firebase.database().ref('allData').child(value).set(firebase.database.ServerValue.increment(1));
}

app.post("/updateStateSelect", (request, result) => {
  if (verifyCountry(request)) {
    incrementEvent(request, 'stateSelect');
    sendSuccessCode(result, "stateSelect");
  }
});

app.post("/updateMapLoads", (request, result) => {
  if (verifyCountry(request)) {
    incrementValue(request, 'mapLoads');
    incrementUniversalValue('allMapLoads');
    sendSuccessCode(result, "mapLoads");
  }
});

app.post("/updateVisits", (request, result) => {
  if (verifyCountry(request)) {
    //Increment the number of visits by 1
    incrementValue(request, 'visits');
    incrementUniversalValue('allVisits');

    //Also increment the number of mapLoads by 1, since a map is
    // loaded upon entering the site
    incrementValue(request, 'mapLoads');
    incrementUniversalValue('allMapLoads');

    sendSuccessCode(result, "visits");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
