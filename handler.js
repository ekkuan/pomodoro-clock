var express = require('express');
var app = express();
var sleep = require('sleep');


let time = 25*60*1000;

let countDown = (t) => {
	t -= 1000;
	let timeString = t.toString();
	return timeString;
}


app.get('/', function(req, res){

	let newTime;

	while (time > 0) {
		newTime = countDown(time);
		time -= 1000;
	}

	if (time <= 0) {
		res.send('DONE!')
	}


});

app.listen(3000);

