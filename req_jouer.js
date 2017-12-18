"use strict";

var fs = require("fs");
require('remedial');
var conv = require("./image.js");

var trait = function (req, res, query) {
	
	var marqueurs;
	var page;
	var map;

	map = JSON.parse(fs.readFileSync("map_2-4.json","UTF-8"));

	page = fs.readFileSync('jeu.html', 'utf-8');

	marqueurs = {};

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(map),"UTF-8");

	marqueurs = conv(map);
	marqueurs.pseudo = query.pseudo;
	page = page.supplant(marqueurs);
	console.log(marqueurs.pseudo +" "+ query.pseudo);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();

};

module.exports = trait;
