"use strict";

var tab = require("./tab.js");
var rep = require("./command.js");
var x = Number(x);
var y = Number(y);
var q;
var step = require("./testTab.js");
var fin = Number(fin);
fin = 0;

var lapin = [];

do {

	lapin[0] = Math.floor(Math.random()*12);
	lapin[1] = Math.floor(Math.random()*15);

} while ( tab [1][lapin[0]][lapin[1]] != 0 );

tab [0][lapin[0]][lapin[1]] = "L";

var carotte = [];

do {

	carotte[0] = Math.floor(Math.random()*12);
	carotte[1] = Math.floor(Math.random()*15);

} while ( tab [1][carotte[0]][carotte[1]] != 0 );

//tab [carotte[0]][carotte[1]] = "C";

var ecran = function (tab) {

	console.log("\u001B[2J\u001B[0;0f");
	console.log("\n   ++++++++++++++++++++++++++++++++");

	for ( x = 0 ; x < 12 ; x++ ) {

		process.stdout.write("   +");

		for ( y = 0 ; y < 15 ; y++ ) {

			process.stdout.write(" " + tab[0][x][y]);

		}

		console.log("+");

	}

	console.log("   ++++++++++++++++++++++++++++++++\n\n");

}

var game = function (tab) {

	do {

		q = rep();
		fin = step(q, lapin, tab, fin);
		ecran(tab);

	} while ( fin < 1 );

}
ecran(tab);
game(tab);

console.log("\u001B[2J\u001B[0;0f");
console.log("\n\n          Bonne appetit !!!\n    Tu as gagné !\n\n");
