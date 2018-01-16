// Script pour creer une map 

"use strict"

var fs = require("fs");
var path = require("path");
var url = require("url");
require('remedial');

var traite = function(req, res, query) {
	
	var marqueurs;
	var page;

	//affichage de la Page 

	page = fs.readFileSync('creer.html', 'utf-8');
	
	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------

module.exports = traite;
