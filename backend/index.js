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



/*
 * Sends a success "code" back to the frontend
 * 
 * @param res = the object to send data back to
 * @param val = the value that was updated successfully
 */
const sendSuccessCode = (res, val) => {
  const resultObject = {code: "200: Updated " + val + " Successfully"}
  res.send(resultObject);
};



/*
 * Gets the country passed in through the request body
 * 
 * @param req = the request object that was sent in a post request (json format)
 */
const getCountry = (req) => {
  if (req.body.country != '' && req.body.country != undefined) {
    return firebase.database().ref('allData').child('countries').child(req.body.country);
  }
};



/*
 * Gets the state passed in through the request body if the country passed in is the US
 * 
 * @param req = the request object that was sent in a post request (json format)
 */
const getState = (req) => {
  if (req.body.country === 'US') {
    return getCountry(req)
      .child('states')
      .child(req.body.region);
  }
};



/*
 * Verifies that the current country is not null or empty. This is needed since on webpage load
 * the state is not always set before a request to the backend is made as the location api is 
 * sometimes slow (Can't be upset about a free API though!)
 * 
 * @param req = the request object that was sent in a post request (json format)
 */
const verifyCountry = (req) => {
  return (req.body.country != '' && req.body.country != undefined);
}



/*
 * Increments the specified event if it is an immediate child of the event object.
 * 
 * @param req = the request object that was sent in a post request (json format)
 * @param value = the key of the event being incremented
 */
const incrementEvent = (req, value) => {
  if (req.body.country === 'US') { 
    getState(req).child('events').child(value).set(firebase.database.ServerValue.increment(1));
  }

  //Increment the value by 1 for the country's event
  getCountry(req).child('events').child(value).set(firebase.database.ServerValue.increment(1));
}



/*
 * Increments the specified value if it is an immediate child of the country or state object.
 * 
 * @param req = the request object that was sent in a post request (json format)
 * @param value = the key of the value being incremented
 */
const incrementValue = (req, value) => {
  //If country is US, increment that value by 1
  if (req.body.country === 'US') { 
    getState(req).child(value).set(firebase.database.ServerValue.increment(1));
  }

  //Increment the value by 1 for the country
  getCountry(req).child(value).set(firebase.database.ServerValue.increment(1));
}



/*
 * Increments the specified value of a universal value (things like total site visits, total map loads, etc).
 * 
 * @param value = the key of the value being incremented
 */
const incrementUniversalValue = (value) => {
  firebase.database().ref('allData').child(value).set(firebase.database.ServerValue.increment(1));
}

/*
 * 
 * 
 * @param req
 * @param value 
 */
const saveRiskQuizResult = (req, value) => {
  //If country is US, increment that value by 1
  if (req.body.country === 'US') { 
    const stateQuiz = getState(req).child("events").child("riskQuiz");
  }

  //Increment the value by 1 for the country
  const countryQuiz = getCountry(req).child("events").child("riskQuiz");
}



//Updates the count of state select whenever the state select button is pulled up
app.post("/updateStateSelect", (request, result) => {
  if (verifyCountry(request)) {
    incrementEvent(request, 'stateSelect');
    sendSuccessCode(result, "stateSelect");
  }
});



//Updates the number of times the maps have been loaded
app.post("/updateMapLoads", (request, result) => {
  if (verifyCountry(request)) {
    incrementValue(request, 'mapLoads');
    incrementUniversalValue('allMapLoads');
    sendSuccessCode(result, "mapLoads");
  }
});

app.post("/updateRiskQuiz", (request, result) => {
  if (verifyCountry(request)) {

  }
});



//Updates the number of times the site has been visited
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
