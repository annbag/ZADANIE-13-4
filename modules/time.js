function calcTime(time) {
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time % 3600) / 60);
	var seconds = Math.floor(time % 60);

	return hours + 'h ' + minutes + 'min ' + seconds + 'sec';
}

exports.print = calcTime;