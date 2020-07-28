const express = require("express");
const process = require("process");
const request = require("request");
const cors = require("cors");

const app = new express();

// Allow cors
app.use(cors())

app.get("/backToFrontConnection", (req, result) => {
  console.log(req); //Logs in the terminal
  const resultObject = {text: "You have connected to the backend!"}
  result.send(resultObject);

  // request('http://ip-api.com/json/', function(data) {
  //   console.log(data);
  //   result.send(data);
  // })
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
