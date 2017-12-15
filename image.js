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

	for ( x = 0 ; x < 20 ; x++ ) {

		for ( y = 0 ; y < 20 ; y++ ) {

			if ( tab.m[x][y].type == "m" ) {

				marqueur[x + ":" + y] = im3 ;

			} else if ( tab.m[x][y].type === "v" ) { 

				marqueur[x + ":" + y] = im1 ;

			} else if ( tab.m[x][y].type === "j" ) { 

				marqueur[x + ":" + y] = im2 ;

			} else if ( tab.m[x][y].type === "pp" ) { 

				marqueur[x + ":" + y] = im4 ;

			} else if ( tab.m[x][y].type === "p" ) {

				if ( tab.m[x][y].etat === "f" ) {

					marqueur[x + ":" + y] = im6;

				} else if ( tab.m[x][y].etat === "o" ) {

					marqueur[x + ":" + y] = im5 ;

				}

			}

		}

	}

}

module.exports = conv;
