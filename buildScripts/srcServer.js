var express = require('express');
var path = require('path');
var open = require('open');


var port = 3000;
var app = express(); //instance of express

app.get('/', function(req, res) { //any references to the root should be handled by this function which takes a request and a response
		res.sendFile(path.join(__dirname, '../src/index.html')) //dirname = directory name we are currently running in along with source directory. Sends the file we specified. So when I hit the address the index file is displayed
});


app.listen(port, function(err) { //tell express to listen to port we defined above
	if (err) { //Adding some error handling. Log it to console. Otherwise we will open up the website (hardcodes below with the port)
		console.log(err);

	} else {
		open('http://localhost:' + port);
	}
});
