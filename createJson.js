"use strict"

var fs = require("fs");
var repJSON;
var x = Number (x);
var y = Number (y);
var tr;
var tab = {};
var j = {}

var map =  [["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","v","m"],
			["m","v","v","v","j","v","v","v","v","v","v","v","v","v","v","v","s","v","v","m"],
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

			tr = map[x][y].c;
			map[x][y] = {"coor":tr,"typeo":"p","type":"p","poid":"1","etat":"f"};

		} else if ( map[x][y].t === "c" ) {

			tr = map[x][y].c;
			map[x][y] = {"coor":tr,"typeo":"v","type":"c","poid":"0"}

		} else if ( map[x][y] === "ft" ) {

			map[x][y] = {"typeo":"ft","type":"ft","poid":"0","etat":"f"};

		} else if ( map[x][y] === "j" ) {

			j.l = x;
			j.lo = x;
			j.c = y;
			j.co = y;
			map[x][y] = {"typeo":"v","type":"j","poid":"1","l":"3","c":"1"};

		} else if ( map[x][y] === "s" ) {

			map[x][y] = {"typeo":"s","type":"s","poid":"1","fin":"1"};

		} else if ( map[x][y].t ==="pp" ){

			tr = map[x][y].c;
			map[x][y] = {"coor":tr,"typeo":"pp","type":"pp","poid":"0"};
		}
		  else if ( map[x][y].t ==="l" ){
		  	
			tr = map[x][y].c;
			map[x][y] = {"coor":tr,"typeo":"l","type":"l","poid":"1","etat":"f"};
		}
		
	}

}

tab.j = j;
tab.m = map;

repJSON = JSON.stringify(tab);
fs.writeFileSync("map_2-4.json", repJSON, "UTF-8");
