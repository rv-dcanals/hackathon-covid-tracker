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



//Compare two strings
const compStrings = (string1, string2) => {
  return string1.toUpperCase() === string2.toUpperCase();
}


/*
 * 
 * 
 * @param req
 * @param value 
 */
const saveRiskQuizResult = (req) => {
  //If country is US, increment that value by 1
  if (req.body.country === 'US') {
    //Infected
    if (compStrings(req.body.quizResults.infected,'yes')) {
      getState(req).child("events").child("riskQuiz").child("knowCovid").child("yes").set(firebase.database.ServerValue.increment(1));
    } else {
      getState(req).child("events").child("riskQuiz").child("knowCovid").child("no").set(firebase.database.ServerValue.increment(1));
    }

    //Mask
    if (compStrings(req.body.quizResults.mask,'yes')) {
      getState(req).child("events").child("riskQuiz").child("mask").child("yes").set(firebase.database.ServerValue.increment(1));
    } else {
      getState(req).child("events").child("riskQuiz").child("mask").child("no").set(firebase.database.ServerValue.increment(1));
    }

    //Home
    if (compStrings(req.body.quizResults.home,'yes')) {
      getState(req).child("events").child("riskQuiz").child("home").child("yes").set(firebase.database.ServerValue.increment(1));
    } else {
      getState(req).child("events").child("riskQuiz").child("home").child("no").set(firebase.database.ServerValue.increment(1));
    }

    //Sex
    if (compStrings(req.body.quizResults.sex,'male')) {
      getState(req).child("events").child("riskQuiz").child("sex").child("male").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.sex,'female')) {
      getState(req).child("events").child("riskQuiz").child("sex").child("female").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.sex,'nonbinary')) {
      getState(req).child("events").child("riskQuiz").child("sex").child("nonbinary").set(firebase.database.ServerValue.increment(1));
    } else {
      getState(req).child("events").child("riskQuiz").child("sex").child("other").set(firebase.database.ServerValue.increment(1));
    }

    //Protection
    if (req.body.quizResults.protection != '') {
      for (let i = req.body.quizResults.protection.split(',').length; i > 0; i--) {
        getState(req).child("events").child("riskQuiz").child('protectiveMeasures').set(firebase.database.ServerValue.increment(1));
      }
    }

    //Age
    if (compStrings(req.body.quizResults.age,'1-5')) {
      getState(req).child("events").child("riskQuiz").child("age").child("1-5").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'6-10')) {
      getState(req).child("events").child("riskQuiz").child("age").child("6-10").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'11-15')) {
      getState(req).child("events").child("riskQuiz").child("age").child("11-15").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'16-20')) {
      getState(req).child("events").child("riskQuiz").child("age").child("16-20").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'21-25')) {
      getState(req).child("events").child("riskQuiz").child("age").child("21-25").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'26-30')) {
      getState(req).child("events").child("riskQuiz").child("age").child("26-30").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'31-35')) {
      getState(req).child("events").child("riskQuiz").child("age").child("31-35").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'36-40')) {
      getState(req).child("events").child("riskQuiz").child("age").child("36-40").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'41-45')) {
      getState(req).child("events").child("riskQuiz").child("age").child("41-45").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'46-50')) {
      getState(req).child("events").child("riskQuiz").child("age").child("46-50").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'51-55')) {
      getState(req).child("events").child("riskQuiz").child("age").child("51-55").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'56-60')) {
      getState(req).child("events").child("riskQuiz").child("age").child("56-60").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'61-65')) {
      getState(req).child("events").child("riskQuiz").child("age").child("61-65").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'66-70')) {
      getState(req).child("events").child("riskQuiz").child("age").child("66-70").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'71-75')) {
      getState(req).child("events").child("riskQuiz").child("age").child("71-75").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'76-80')) {
      getState(req).child("events").child("riskQuiz").child("age").child("76-80").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'81-85')) {
      getState(req).child("events").child("riskQuiz").child("age").child("81-85").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'86-90')) {
      getState(req).child("events").child("riskQuiz").child("age").child("86-90").set(firebase.database.ServerValue.increment(1));
    } else if (compStrings(req.body.quizResults.age,'91-95')) {
      getState(req).child("events").child("riskQuiz").child("age").child("91-95").set(firebase.database.ServerValue.increment(1));
    } else {
      getState(req).child("events").child("riskQuiz").child("age").child("96-100").set(firebase.database.ServerValue.increment(1));
    }
    //NumTaken
    getState(req).child("events").child("riskQuiz").child("numTaken").set(firebase.database.ServerValue.increment(1));
  }

   //Infected
   if (compStrings(req.body.quizResults.infected,'yes')) {
    getCountry(req).child("events").child("riskQuiz").child("knowCovid").child("yes").set(firebase.database.ServerValue.increment(1));
  } else {
    getCountry(req).child("events").child("riskQuiz").child("knowCovid").child("no").set(firebase.database.ServerValue.increment(1));
  }

  //Mask
  if (compStrings(req.body.quizResults.mask,'yes')) {
    getCountry(req).child("events").child("riskQuiz").child("mask").child("yes").set(firebase.database.ServerValue.increment(1));
  } else {
    getCountry(req).child("events").child("riskQuiz").child("mask").child("no").set(firebase.database.ServerValue.increment(1));
  }

  //Home
  if (compStrings(req.body.quizResults.home,'yes')) {
    getCountry(req).child("events").child("riskQuiz").child("home").child("yes").set(firebase.database.ServerValue.increment(1));
  } else {
    getCountry(req).child("events").child("riskQuiz").child("home").child("no").set(firebase.database.ServerValue.increment(1));
  }

  //Sex
  if (compStrings(req.body.quizResults.sex,'male')) {
    getCountry(req).child("events").child("riskQuiz").child("sex").child("yes").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.sex,'female')) {
    getCountry(req).child("events").child("riskQuiz").child("sex").child("female").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.sex,'nonbinary')) {
    getCountry(req).child("events").child("riskQuiz").child("sex").child("nonbinary").set(firebase.database.ServerValue.increment(1));
  } else {
    getCountry(req).child("events").child("riskQuiz").child("sex").child("other").set(firebase.database.ServerValue.increment(1));
  }

  //Protection
  if (req.body.quizResults.protection != '') {
    for (let i = req.body.quizResults.protection.split(',').length; i > 0; i--) {
      getCountry(req).child("events").child("riskQuiz").child('protectiveMeasures').set(firebase.database.ServerValue.increment(1));
    }
  }

  //Age
  if (compStrings(req.body.quizResults.age,'1-5')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("1-5").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'6-10')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("6-10").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'11-15')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("11-15").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'16-20')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("16-20").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'21-25')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("21-25").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'26-30')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("26-30").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'31-35')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("31-35").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'36-40')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("36-40").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'41-45')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("41-45").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'46-50')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("46-50").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'51-55')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("51-55").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'56-60')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("56-60").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'61-65')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("61-65").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'66-70')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("66-70").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'71-75')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("71-75").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'76-80')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("76-80").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'81-85')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("81-85").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'86-90')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("86-90").set(firebase.database.ServerValue.increment(1));
  } else if (compStrings(req.body.quizResults.age,'91-95')) {
    getCountry(req).child("events").child("riskQuiz").child("age").child("91-95").set(firebase.database.ServerValue.increment(1));
  } else {
    getCountry(req).child("events").child("riskQuiz").child("age").child("96-100").set(firebase.database.ServerValue.increment(1));
  }
  //NumTaken
  getCountry(req).child("events").child("riskQuiz").child("numTaken").set(firebase.database.ServerValue.increment(1));
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
    saveRiskQuizResult(request);
  }
});


//Increments the number of times a state was added to a comparison being made
app.post("/stateComparisonAdded", (request, result) => {
  if (verifyCountry(request)) {
    incrementEvent(request, 'stateComparisonAdded');
    sendSuccessCode(result, "stateComparisonAdded");
  }
});


//Increments the number of times a comparison between multiple states was viewed
app.post("/comparisonViewed", (request, result) => {
  if (verifyCountry(request)) {
    incrementEvent(request, 'comparisonViewed');
    sendSuccessCode(result, "comparisonViewed");
  }
});


//Increments the number of times the compare states button was clicked
app.post("/compareStateClicked", (request, result) => {
  if (verifyCountry(request)) {
    incrementEvent(request, 'compareStateClicked');
    sendSuccessCode(result, "compareStateClicked");
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
