"use srtict"

var fs = require("fs");
require('remedial');
var gauche = require("/gauche.js");
var droite = require("/droite.js");
var haut = require("/haut.js");
var bas = require("/bas.js");

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var dir;
	var tab;

	page = fs.readFileSync('jeu.html', 'UTF-8');

	marqueurs = {};

	marqueurs.tab = require("/recupTabHtml.js");

	//Reconnaitre le déplacement.

	dir = query.dir;

	//Reconnaitre la nouvelle case.
	//Faire l'interaction et swap les cases.

	if ( dir === 1 ) {

		tab = gauche();

	} else if ( dir === 2 ) {

		tab = haut();

	} else if ( dir === 3 ) {

		tab = droite();

	} else if ( dir === 4 ) {

		tab = bas();

	}

	//Rendre son apparence à la case précédente.

	

	//Appliquer les changements.

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
}

//Renvoyer la page.

module.exports = trait;
