// Reset la maps a zero

"use srtict"

var fs = require("fs");
require('remedial');
var conv = require("./image.js");

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var tab;
	var map;

	page = fs.readFileSync('jeu.html', 'UTF-8');

	marqueurs = {};

	tab = JSON.parse(fs.readFileSync("map_" + query.niv + ".json","UTF-8"));
	map = JSON.parse(fs.readFileSync("map_" + query.pseudo + ".json","UTF-8"));

	tab.lv = Number(map.lv);

	marqueurs = conv(tab);
	marqueurs.pseudo = query.pseudo;
	marqueurs.niv = query.niv;
	page = page.supplant(marqueurs);

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

}

module.exports = trait;
