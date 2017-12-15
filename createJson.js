"use strict"

var fs = require("fs");
var repJSON;
var x = Number (x);
var y = Number (y);
var tab = {};
var j = {}
j.l = 2;
j.c = 4;

var map =  [["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","j","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v",{'t':"pp",'c':"1"},"v","v","v","v","v","v","v","m","m","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","m","m",{'t':"p",'c':"1"},"m","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","m","v","v","v","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","m","v","s","v","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","m","v","v","v","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","m","m","m","m","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"]];

for ( x = 0 ; x < 20 ; x++ ) {

	for ( y = 0 ; y < 20 ; y++ ) {

		if ( map[x][y] === "m" ) {

			map[x][y] = {"typeo":"m","type":"m","poid":"1"};

		} else if ( map[x][y] === "v" ) {

			map[x][y] = {"typeo":"v","type":"v","poid":"0"};

		} else if ( map[x][y].t === "p" ) {

			map[x][y] = {"coor":"map[x][y].c","typeo":"p","type":"p","poid":"1","etat":"f"};

		} else if ( map[x][y] === "j" ) {

			map[x][y] = {"typeo":"v","type":"j","poid":"1","l":"3","c":"1"};

		} else if ( map[x][y] === "s" ) {

			map[x][y] = {"typeo":"s","type":"s","poid":"1","fin":"1"};

		} else if ( map[x][y].t ==="pp" ){

			map[x][y] = {"coor":"map[x][y].c","typeo":"pp","type":"pp","poid":"0"};
		}

	}


}

tab.j = j;
tab.m = map;

repJSON = JSON.stringify(tab);
fs.writeFileSync("map_2-4.json", repJSON, "UTF-8");
