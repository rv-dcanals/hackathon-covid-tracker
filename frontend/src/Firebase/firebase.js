import firebase from 'firebase';

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

export default firebase