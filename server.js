// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Reservation (DATA)
// =============================================================
var tables = [{
  name: "yoda",
  phoneNumber: "Yoda",
  email: "Jedi Master",
  uniqueId: 1,
}, {
  name: "person2",
  phoneNumber: "333333",
  email: "3333@33.com",
  uniqueId: 2,
}, {
  name: "person3",
  phoneNumber: "444",
  email: "444@44.com",
  uniqueId: 3,
}];

var waitingList = [{
	name: "person5",
  phoneNumber: "555-4443",
  email: "555@55.com",
  uniqueId: 5,
}, {
  name: "person6",
  phoneNumber: "66666",
  email: "66666@66.com",
  uniqueId: 6,
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "restaurant.html"));
});

app.get("/ViewTables", function(req, res) {
  res.sendFile(path.join(__dirname, "viewTables.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Get all characters
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

// Get all characters
app.get("/api/waitingList", function(req, res) {
  res.json(waitingList);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  if(tables.length > 4) {
  	//push to waitlist
  	waitinglist.push(newReservation);
  }
  else{
  	tables.push(newReservation);
  }
});

// $.get("/api/tables", function(data) {
//   console.log(data);
// }
        
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});