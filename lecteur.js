var repJSON;
var fs = require("fs");
var tab;
var x;
var y;

repJSON = fs.readFileSync("map_1-2.json", "UTF-8");
tab = JSON.parse(repJSON);

for ( x = 0 ; x < 7 ; x++ ) {

    for ( y = 0 ; y < 7 ; y++ ) {

		if ( tab[x][y] === "v" ) {

			process.stdout.write("-");

		} else if ( tab[x][y] === "m" ) {

			process.stdout.write("#");

		} else if ( tab[x][y] === "j" ) {

			process.stdout.write("J");

		} else if ( tab[x][y] === "p" ) {

			process.stdout.write("H");

		} else if ( tab[x][y] === "s" ) {

			process.stdout.write("O");

		}
		process.stdout.write(" ");
	}
	
	console.log();

}
