"use strict";
//Средство es6: блок "левых" обьявлений
const sentences = [
	{ subject: "JavaScript", verb: "is", object: "great" },
	{ subject: "Elephants", verb: "are", object: "large" },
];
//Средство es6: дуструктуризация обьекта
function say({ subject, verb, object }) {
	//Средство es6: строки шаблона 
	console.log(`${subject} ${verb} ${object}`);
}
//Средство es6: for..or
for (let s of sentences) {
	say(s);
}