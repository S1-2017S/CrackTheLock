// Quitte la parti avec message de fin.
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;

	page = fs.readFileSync('menu.html', 'UTF-8');

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.fin = "Fin de partie. Vous êtes restez coincé dans le labyrinthe ! GAME OVER !
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
}

module.exports = trait;

