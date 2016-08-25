/*jshint esversion: 6 */
"use strict";

var string = "Hello World";

console.log(string);

class Diarrhea {
	constructor(type) {
		this.type = type;
	}
	
	say() {
		console.log("I'm a " + this.type + " dunky");
	}
}

var slimy = new Diarrhea("slimy");
slimy.say();