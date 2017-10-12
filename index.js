// 4 fields that take as inputs and put into a JSON object
// home page that has link to go to make reservation page.
// link that goes to view reservations and waitlist
// When you make a reservation, put a maximum how many res before putting on waitlist section.

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


app.get("/api/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

