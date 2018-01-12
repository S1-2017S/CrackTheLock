//Cette fonction déplace le joueur en haut
"use strict"

var deplace = function (req, res, query, fin) {

	var x;
	var y;
	var nbr = 0;
	var nbp = 0;
	var fs = require("fs");
	var tab = JSON.parse(fs.readFileSync("map_" + query.pseudo + ".json","UTF-8"));

	if ( tab.j.c > 0 ) {

		if ( tab.m[tab.j.l-1][tab.j.c].type == "v" && tab.m[tab.j.l-1][tab.j.c].typeo == "v" ) {

			tab.m[tab.j.l][tab.j.c].poid = 0;
			tab.m[tab.j.l-1][tab.j.c].type = "j";
			tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
			tab.j.l--;
			tab.m[tab.j.l][tab.j.c].poid = 1;

		} else if ( tab.m[tab.j.l-1][tab.j.c].type == "p" ) {
			if ( tab.m[tab.j.l-1][tab.j.c].etat == "o" ) {
				tab.m[tab.j.l][tab.j.c].poid = 0;
				tab.m[tab.j.l-2][tab.j.c].type = "j";
				tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
				tab.m[tab.j.l-1][tab.j.c].type = "p";
				tab.j.l = tab.j.l - 2;
				tab.m[tab.j.l][tab.j.c].poid = 1;
			}
		} else if ( tab.m[tab.j.l-1][tab.j.c].type == "s" ) {

			fin++;

		} else if ( tab.m[tab.j.l-1][tab.j.c].type == "l" ) {

			for (x = 0 ; x < 20 ; x++ ) {

				for ( y = 0 ; y < 20 ; y++ ) {

					if ( tab.m[x][y].type == "p" ) {

						if ( tab.m[tab.j.l-1][tab.j.c].coor == tab.m[x][y].coor ) {

							if ( tab.m[x][y].etat == "f" ) {

								tab.m[x][y].etat = "o";
								tab.m[tab.j.l-1][tab.j.c].etat = "o";

							}

						}

					}

				}

			}

		} else if ( tab.m[tab.j.l-1][tab.j.c].type == "pp" ) {

			for (x = 0 ; x < 20 ; x++ ) {

				for ( y = 0 ; y < 20 ; y++ ) {

					if ( tab.m[x][y].type == "p" ) {

						if ( tab.m[tab.j.l-1][tab.j.c].coor == tab.m[x][y].coor ) {

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
			tab.m[tab.j.l-1][tab.j.c].type = "j";
			tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
			tab.j.l--;
			tab.m[tab.j.l-1][tab.j.c].poid = 1;

		} else if ( tab.m[tab.j.l-1][tab.j.c].type == "c" ) {
			for (x = 0 ; x < 20 ; x++ ) {
				for ( y = 0 ; y < 20 ; y++ ) {
					if ( tab.m[x][y].type == "c" ) {

						nbr++;

					}
				}
			} if ( nbr === 1 ) {
				for (x = 0 ; x < 20 ; x++ ) {
					for ( y = 0 ; y < 20 ; y++ ) {
						if ( tab.m[x][y].type == "p" ) {
							if ( tab.m[tab.j.l-1][tab.j.c].coor == tab.m[x][y].coor ) {
								if ( tab.m[x][y].etat == "f" ) {

									tab.m[x][y].etat = "o";

								}
							}

						}
					}
				}
			}
			tab.m[tab.j.l-1][tab.j.c].type = "j";
			tab.m[tab.j.l][tab.j.c].poid = 0;
			tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
			tab.j.l--;
			tab.m[tab.j.l-1][tab.j.c].poid = 1;
		} else if ( tab.m[tab.j.l-1][tab.j.c].type == "ft" ) {
			if ( tab.m[tab.j.l-1][tab.j.c].etat == "f" ) {

				tab.m[tab.j.l-1][tab.j.c].etat = "o";

			}
			tab.m[tab.j.l][tab.j.c].type = tab.m[tab.j.l][tab.j.c].typeo;
			tab.m[tab.j.l][tab.j.c].poid = 0;
			tab.j.l = tab.j.lo;
			tab.j.c = tab.j.co;
			tab.m[tab.j.l][tab.j.c].type = "j";
			tab.m[tab.j.l][tab.j.c].poid = 1;

		}

		fs.writeFileSync("map_" + query.pseudo + ".json",JSON.stringify(tab),"UTF-8");
		return fin;

	}
}
module.exports = deplace;
