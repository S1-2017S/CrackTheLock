"use strict";

var kbd = require("kbd");

var q = function () {

	var rep;

	console.log("\n      [s] Bas, [q] Gauche, [d] Droite et [z] Haut.\n");

	do {

		process.stdout.write(" Commande : ");
		rep = kbd.getLineSync();

	} while ( rep !== "s" && rep !== "q" && rep !== "d" && rep !== "z" );

	return rep;

}

module.exports = q;
