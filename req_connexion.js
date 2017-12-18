"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var pseudo;
	var password;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;

	listeMembres = JSON.parse(fs.readFileSync("membres.json", 'utf-8'));

	trouve = false;
	i = 0;
	while(i<listeMembres.length && trouve === false) {

		if(listeMembres[i].pseudo === query.pseudo) {

			trouve = true;

		}

		i++;

	}
	
	i--;

	if(trouve === true) {

		if (listeMembres[i].password === query.password) {
			page = fs.readFileSync('menu.html', 'UTF-8');
			marqueurs = {};
			marqueurs.pseudo = query.pseudo;
			page = page.supplant(marqueurs);
		} else {
			page = fs.readFileSync('connection.html', 'UTF-8');
			marqueurs = {};
			marqueurs.pseudo = query.pseudo;
			marqueurs.erreur = "ERREUR : pseudo ou password incorrect"
				page = page.supplant(marqueurs);
		}

	} else {

		page = fs.readFileSync('connection.html', 'UTF-8');

		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.password = query.password;
		marqueurs.erreur = "ERREUR : pseudo ou password incorrect"
			page = page.supplant(marqueurs);

	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
}

module.exports = trait;
