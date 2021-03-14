
exports.min = function min (array) {
	if (array && array.length){
		let counter;
	counter=array[0];
	for (i=1;i<array.length;i++){
		if (counter>array[i]) {counter=array[i]}
	}
	return counter;}
	else {return 0;}
}

exports.max = function max (array) {
	if (array && array.length){
	let counter;
	counter=array[0];
	for (i=1;i<array.length;i++){
		if (counter<array[i]) {counter=array[i]}
	}
	return counter;}
	else {  return 0;}
}

exports.avg = function avg (array) {
	if (array && array.length){
	let counter=0;
	for(i=0;i<array.length;i++){
	counter = counter + array[i]
	}
	counter = counter/array.length;
	return counter;}
	else {return 0;}
}
