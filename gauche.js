"use strict"

var deplace = function (req, res, query, fin) {

	var x;
	var y;
	var nbp = 0;
	var fs = require("fs");
	var tab = JSON.parse(fs.readFileSync("map_" + query.pseudo + ".json","UTF-8"));

	if ( tab.j.c > 0 ) {

		if ( tab.m[tab.j.l][tab.j.c-1].type == "v" ) {

			tab.m[tab.j.l][tab.j.c].poid = 0;
			tab.m[tab.j.l][tab.j.c-1].type = "j";
			tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
			tab.j.c--;
			tab.m[tab.j.l][tab.j.c].poid = 1;

		} else if ( tab.m[tab.j.l][tab.j.c-1].type == "p" ) {
			if ( tab.m[tab.j.l][tab.j.c-1].etat == "o" ) {
				tab.m[tab.j.l][tab.j.c].poid = 0;
				tab.m[tab.j.l][tab.j.c-2].type = "j";
				tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
				tab.m[tab.j.l][tab.j.c-1].type = "p";
				tab.j.c = tab.j.c - 2;
				tab.m[tab.j.l][tab.j.c].poid = 1;
			}
		} else if ( tab.m[tab.j.l][tab.j.c-1].type == "s" ) {

			fin++;

		} else if ( tab.m[tab.j.l][tab.j.c-1].type == "pp" ) {

			for (x = 0 ; x < 20 ; x++ ) {

				for ( y = 0 ; y < 20 ; y++ ) {

					if ( tab.m[x][y].type == "p" ) {

						if ( tab.m[tab.j.l][tab.j.c-1].coor == tab.m[x][y].coor ) {

							if ( tab.m[x][y].etat == "f" ) {

								tab.m[x][y].etat = "o";

							} else if ( tab.m[x][y].etat == "o" ) {

								tab.m[x][y].etat = "f";

							}

						}

					}

				}

			}

			tab.m[tab.j.l][tab.j.c].poid = 0;
			tab.m[tab.j.l][tab.j.c-1].type = "j";
			tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
			tab.j.c--;
			tab.m[tab.j.l][tab.j.c-1].poid = 1;


		} else if ( tab.m[tab.j.l][tab.j.c-1].type == "l" ) {

			for (x = 0 ; x < 20 ; x++ ) {

				for ( y = 0 ; y < 20 ; y++ ) {

					if ( tab.m[x][y].type == "p" ) {

						if ( tab.m[tab.j.l][tab.j.c-1].coor == tab.m[x][y].coor ) {

							if ( tab.m[x][y].etat == "f" ) {

								tab.m[x][y].etat = "o";
								tab.m[tab.j.l][tab.j.c-1].etat = "o";

							}

						}

					}

				}

			}

		}

	}

	fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");
	return fin;

}

module.exports = deplace;
