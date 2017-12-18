// gfdsgdgfdgsfdbgdfbfgbgdf

"use strict"

var conv = function (tab) {

	var x;
	var y;
	var im1 = "grass.png";
	var im2 = "mario.png";
	var im3 = "mur.png";
	var im4 = "plaquepression16x16.png";
	var im5 = "door.png";
	var im6 = "doorclosed.png";
	var im7 = "sortie.png";
	var im8	= "mecanisme1.png";
	var im9	= "mecanisme2.png";
	var marqueurs = {};

	for ( x = 0 ; x < 20 ; x++ ) {
		for ( y = 0 ; y < 20 ; y++ ) {

			if (tab.m[x][y].type === "m" ) {
				marqueurs[x + ":" + y] = im3 ;
			} else if ( tab.m[x][y].type === "v" ) { 
				marqueurs[x + ":" + y] = im1 ;
			} else if ( tab.m[x][y].type === "j" ) { 
				marqueurs[x + ":" + y] = im2 ;
			} else if ( tab.m[x][y].type === "pp" ) { 
				marqueurs[x + ":" + y] = im4 ;
			} else if ( tab.m[x][y].type === "p" ) {
				if ( tab.m[x][y].etat === "f" ) {
					marqueurs[x + ":" + y] = im5;
				} else if ( tab.m[x][y].etat === "o" ) {
					marqueurs[x + ":" + y] = im6;
				}
			} else if ( tab.m[x][y].type === "l" ) {
				if ( tab.m[x][y].etat === "f" ) {
					marqueurs[x + ":" + y] = im9;
				} else if ( tab.m[x][y].etat === "o") {
					marqueurs[x + ":" + y] = im8;
				}
			} else if ( tab.m[x][y].type === "s" ) {
				marqueurs[x + ":" + y] = im7;
			}

		}

	}

	return marqueurs;

}

module.exports = conv;
