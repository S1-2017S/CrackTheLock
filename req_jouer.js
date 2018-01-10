"use strict";

var fs = require("fs");
require('remedial');
var conv = require("./image.js");

var trait = function (req, res, query) {
	
	var marqueurs;
	var page;
	var map;
	var niv;

	niv = "3-1";

	map = JSON.parse(fs.readFileSync("map_" + niv + ".json","UTF-8"));

	map.lv = 0;

	page = fs.readFileSync('jeu.html', 'utf-8');

	marqueurs = {};

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(map),"UTF-8");

	marqueurs = conv(map);
	marqueurs.pseudo = query.pseudo;
	marqueurs.niv = niv;
	page = page.supplant(marqueurs);
	console.log(marqueurs.pseudo +" "+ query.pseudo);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

};

module.exports = trait;
