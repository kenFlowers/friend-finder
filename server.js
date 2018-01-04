var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var myFriends = [
	{
		"name": "No one submitted yet :(",
		"picture": "",
		"scores": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
	}
];

//route to show the survey html page
app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname + "/public/survey.html"));
});

//route to show the home page
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/public/home.html"));
});

//route to show all the friends currently passed to the API
app.get("/api/friends", function(req, res){
	res.json(myFriends);
});

//route that handles the addition of the new user and pushes to the array of myfriends
app.post("/api/add", function(req, res){
	var newFriend = req.body;
	myFriends.push(newFriend);

	res.json(newFriend);

});

	

app.listen(PORT, function(){
	console.log("App listening on: " + PORT);
});