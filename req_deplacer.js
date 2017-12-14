"use srtict"

var fs = require("fs");
require('remedial');
var gauche = require("./gauche.js");
var droite = require("./droite.js");
var haut = require("./haut.js");
var bas = require("./bas.js");
var conv = require("./image.js");

var fin = 0;

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var dir;
	var tab;

	page = fs.readFileSync('jeu.html', 'UTF-8');

	marqueurs = {};

	//Reconnaitre le déplacement.

	dir = query.dir;

	//Reconnaitre la nouvelle case.
	//Faire l'interaction et swap les cases.

	if ( dir === 1 ) {

		tab = gauche(req, res, query, fin);

	} else if ( dir === 2 ) {

		tab = haut(req, res, query, fin);

	} else if ( dir === 3 ) {

		tab = droite(req, res, query, fin);

	} else if ( dir === 4 ) {

		tab = bas(req, res, query, fin);

	}

	//Rendre son apparence à la case précédente.

	conv(tab);

	//Tester si le niveau a été fini par le joueur.



	//Appliquer les changements.

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
}

//Renvoyer la page.

module.exports = trait;
