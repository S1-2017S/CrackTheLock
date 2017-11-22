"use strict"

var tab = require("./tab.js");

var nbL = 12;
var nbC = 15;
var x;
var y;

var move = require("./testTab.js");
var action = require("./command.js");
var end  = Number(end);
var q;

end = 0;

var obj = function (val) {

	var obj = {};

	obj.form = "";
	obj.type = val;
	obj.poid = 0;

	return obj;

}

var deCode = function (obj) {

	if ( obj.type === 0 ) {

		obj.form = " ";

	} else if ( obj.type === 1 ) {

		obj.form = ".";
		obj.poid = 1;

	} else if ( obj.type === 2 ) {

		obj.form = "x";

	} else if ( obj.type === 3 ) {

		obj.form = "+";

	} else if ( obj.type === 6 ) {

		obj.form = "Q";
		obj.poid = 1;

	} else if ( obj.type === 5 ) {

		obj.form = "H";
		obj.poid = 1;

	} else if ( obj.type === 7 ) {

		obj.form = "O";

	} else if ( obj.type === 8 ) {

		obj.form = "C";
		obj.poid = 1;

	}

}

var init = function () {

	for ( x = 0 ; x < nbL ; x++ ) {

		for ( y = 0 ; y < nbC ; y++ ) {

			tab [x][y] = obj(tab [x][y]);
			deCode(tab [x][y]);

		}

	}

	return tab;

}

var screen = function (tab) {

	console.log("\u001B[2J\u001B[0;0f");

	for ( x = 0 ; x < nbL ; x++ ) {

		for ( y = 0 ; y < nbC ; y++ ) {

			process.stdout.write( " " + tab [x][y].form );

		}

		console.log();

	}

}

var screenb = function (tab) {

	for ( x = 0 ; x < nbL ; x++ ) {

		for ( y = 0 ; y < nbC ; y++ ) {

			process.stdout.write( " " + tab [x][y].poid );

		}

		console.log();

	}

}

var run = function () {

	init();

	var J1 = [];

	do {

		J1[0] = Math.floor(Math.random()*12);
		J1[1] = Math.floor(Math.random()*15);

	} while ( tab [J1[0]][J1[1]].type != 0 );

	tab [J1[0]][J1[1]].form = "L";
	tab [J1[0]][J1[1]].poid = 1;

	screen(tab);
	screenb(tab);

	do {

		q = action();
		end = move(q, J1, tab, end);
		screen(tab);
		screenb(tab);

	} while ( end < 1 );

}

run();
