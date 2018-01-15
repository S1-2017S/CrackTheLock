// Se déplacer dans le fichier jeu grace aux fléches, qui permettent d'actionner les différents mouvements. 
"use srtict"

var fs = require("fs");
require('remedial');
var gauche = require("./gauche.js");
var droite = require("./droite.js");
var haut = require("./haut.js");
var bas = require("./bas.js");
var conv = require("./image.js");

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var dir;
	var tab;
	var rdm;
	var map;
	var fin = 0;

	page = fs.readFileSync('jeu.html', 'UTF-8');

	marqueurs = {};

	//Reconnaitre le déplacement.

	dir = query.dir;

	//Reconnaitre la nouvelle case.
	//Faire l'interaction et swap les cases.

	if ( dir == 1 ) {

		fin = gauche(req, res, query, fin);

	} else if ( dir == 2 ) {

		fin = haut(req, res, query, fin);

	} else if ( dir == 3 ) {

		fin = droite(req, res, query, fin);

	} else if ( dir == 4 ) {

		fin = bas(req, res, query, fin);

	}

	//Rendre son apparence à la case précédente.

	tab = JSON.parse(fs.readFileSync("map_" + query.pseudo + ".json","UTF-8"));
	tab.lv = Number(tab.lv);
	console.log("fin = " + fin);
	console.log("lv = " + tab.lv);

	//Tester si le niveau a été fini par le joueur.

	if ( fin === 1 ) {

		tab.lv++;
		console.log("lv = " + tab.lv);
		console.log("fin = " + fin);
		fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");
		rdm = Math.floor(Math.random()*4);
		rdm = Number(rdm);

		if ( tab.lv === 1 ) {

			if ( rdm === 0 ) {
				map = "2-4";
			} else if ( rdm === 1 ) {
				map = "5-3";
			} else if ( rdm === 2 ) {
				map = "5-5";
			} else if ( rdm === 3 ) {
				map = "3-9";
			}

			tab = JSON.parse(fs.readFileSync("map_" + map + ".json","UTF-8"));
			tab.lv = 1;
			fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

		} else if ( tab.lv === 2 ) {

			if ( rdm === 0 ) {
				map = "3-4";
			} else if ( rdm === 1 ) {
				map = "5-6";
			} else if ( rdm === 2 ) {
				map = "3-1";
			} else if ( rdm === 3 ) {
				map = "3-6";
			}

			tab = JSON.parse(fs.readFileSync("map_" + map + ".json","UTF-8"));
			tab.lv = 2;
			fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

		} else if ( tab.lv === 3 ) {

			if ( rdm === 0 ) {
				map = "3-2";
			} else if ( rdm === 1 ) {
				map = "3-7";
			} else if ( rdm === 2 ) {
				map = "3-8";
			} else if ( rdm === 3 ) {
				map = "5-8";
			}

			tab = JSON.parse(fs.readFileSync("map_" + map + ".json","UTF-8"));
			tab.lv = 3;
			fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

		} else if ( tab.lv === 4 ) {

			if ( rdm === 0 ) {
				map = "3-5";
			} else if ( rdm === 1 ) {
				map = "3-3";
			} else if ( rdm === 2 ) {
				map = "5-2";
			} else if ( rdm === 3 ) {
				map = "5-9";
			}

			tab = JSON.parse(fs.readFileSync("map_" + map + ".json","UTF-8"));
			tab.lv = 4;
			fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

		} else if ( tab.lv === 5 ) {

			page = fs.readFileSync('menu.html', 'UTF-8');
			marqueurs.fin = "Bravo, vous êtes sorti vivant du labyrinthe !!!";
			marqueurs.pseudo = query.pseudo;

		}
		marqueurs = conv(tab);
		marqueurs.pseudo = query.pseudo;
		marqueurs.niv = map;
		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();

	} else {

		//Appliquer les changements.
		
		marqueurs = conv(tab);
		marqueurs.pseudo = query.pseudo;
		marqueurs.niv = query.niv;

		page = page.supplant(marqueurs);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();
	}
}

//Renvoyer la page.

module.exports = trait;
