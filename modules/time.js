var os = require('os');

function calcTime() {
	var time = os.time();
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time % 3600) / 60);
	var seconds = Math.floor(time % 60);

	console.log('time: ' + hours + 'h' + minutes + 'min' + seconds + 'sec');
}

exports.print = calcTime;