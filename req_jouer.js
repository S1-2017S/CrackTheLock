// Jouer a un Jeux 

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {
	
	var marqueurs;
	var page;

	// affichage du jeu

	page = fs.readFileSync('solo.html', 'utf-8');

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

};

module.exports = trait;


