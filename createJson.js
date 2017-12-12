"use strict"

var fs = require("fs");
var repJSON;
var x = Number (x);
var y = Number (y);

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

			map[x][y] = {"type":"m","poid":"1"};

		} else if ( map[x][y] === "v" ) {

			map[x][y] = {"type":"v","poid":"0"};

		} else if ( map[x][y] === "p" ) {

			map[x][y] = {"type":"p","poid":"1","etat":"f"};

		} else if ( map[x][y] === "j" ) {

			map[x][y] = {"type":"j","poid":"1","l":"3","c":"1"};

		} else if ( map[x][y] === "s" ) {

			map[x][y] = {"type":"s","poid":"1","fin":"1"};

		} else if ( map[x][y] ==="pp" ){

			map[x][y] = {"type":"pp","poid":"0"};
		}

	}


}

repJSON = JSON.stringify(map);
fs.writeFileSync("map_2-2.json", repJSON, "UTF-8");
