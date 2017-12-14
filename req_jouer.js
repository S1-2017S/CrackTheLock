"use strict";

var fs = require("fs");
require('remedial');
var map = JSON.parse(fs.readFileSync("map_2-4.json","UTF-8"));

var trait = function (req, res, query) {
	
	var marqueurs;
	var page;

	page = fs.readFileSync('jeu.html', 'utf-8');

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.pseudo = "";

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(map),"UTF-8");

	conv(map);

	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

};

module.exports = trait;
