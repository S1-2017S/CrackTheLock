"use strict"

var fs = require("fs");
var x = Number (x);
var y = Number (y);

var map = JSON.parse(fs.readFileSync("map_2-0.json","UTF-8"));

for ( x = 0 ; x < 20 ; x++ ) {

    for ( y = 0 ; y < 20 ; y++ ) {

		process.stdout.write( map[x][y].type );

	}

	console.log();

}
