"use strict"

var deplace = function (q, lapin, tab, fin) {

	var x;
	var y;
	var nbp = 0;

	if ( lapin[1] > 0 ) {

		if ( q === "q" && tab[lapin[0]][lapin[1]-1].type == 0 && tab[lapin[0]][lapin[1]-1].poid != 1 ) {

			tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]][lapin[1]-1].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[1]--;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "q" && tab[lapin[0]][lapin[1]-1].type == 2 && tab[lapin[0]][lapin[1]-1].poid != 1 ) {

			tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]][lapin[1]-2].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			tab[lapin[0]][lapin[1]-1].form = "x";
			lapin[1] = lapin[1] - 2;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "q" && tab[lapin[0]][lapin[1]-1].type == 4 && tab[lapin[0]][lapin[1]-1].poid != 1 ) {

			fin++;

		} else if ( q === "q" && tab[lapin[0]][lapin[1]-1].type == 8 ) {

			

		} else if ( q === "q" && tab[lapin[0]][lapin[1]-1].type == 3 && tab[lapin[0]][lapin[1]-1].poid != 1 ) {

			for ( x = 0 ; x < 12 ; x++ ) {

				for ( y = 0 ; y < 15 ; y++ ) {

					if ( tab[x][y].type == 5 ) {

						tab[x][y].type = 2;
						tab[x][y].form = "x";
						tab[x][y].poid = 0;

					}

				}

			}

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]][lapin[1]-1].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[1]--;
			tab[lapin[0]][lapin[1]-1].poid = 1;
			tab[lapin[0]][lapin[1]].type = 0;

		}

	} if ( lapin[0] > 0 ) {

		if ( q === "z" && tab[lapin[0]-1][lapin[1]].type == 0 && tab[lapin[0]-1][lapin[1]].poid != 1 ) {

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]-1][lapin[1]].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[0]--;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "z" && tab[lapin[0]-1][lapin[1]].type == 2 && tab[lapin[0]-1][lapin[1]].poid != 1 ) {

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]-2][lapin[1]].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			tab[lapin[0]-1][lapin[1]].form = "x";
			lapin[0] = lapin[0] - 2;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "z" && tab[lapin[0]-1][lapin[1]].type == 4 && tab[lapin[0]-1][lapin[1]].poid != 1 ) {

			fin++;

		} else if ( q === "z" && tab[lapin[0]-1][lapin[1]].type == 3  && tab[lapin[0]-1][lapin[1]].poid != 1 ) {

			for ( x = 0 ; x < 12 ; x++ ) {

				for ( y = 0 ; y < 15 ; y++ ) {

					if ( tab[x][y].type == 5 ) {

						tab[x][y].type = 2;
						tab[x][y].form = "x";
						tab[x][y].poid = 0;

					}

				}

			}

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]-1][lapin[1]].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[0]--;
			tab[lapin[0]-1][lapin[1]].type = 0;
			tab[lapin[0]][lapin[1]].poid = 1;

		}

	} if ( lapin[1] < 14 ) {

		if ( q === "d" && tab[lapin[0]][lapin[1]+1].type == 0 && tab[lapin[0]][lapin[1]+1].poid != 1 ) {

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]][lapin[1]+1].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[1]++;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "d" && tab[lapin[0]][lapin[1]+1].type == 2 && tab[lapin[0]][lapin[1]+1].poid != 1 ) {

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]][lapin[1]+2].form = "L";
			tab[lapin[0]][lapin[1]+1].form = "x";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[1] = lapin[1] + 2;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "d" && tab[lapin[0]][lapin[1]+1].type == 4 && tab[lapin[0]][lapin[1]+1].poid != 1 ) {

			fin++;
		} else if ( q === "d" && tab[lapin[0]][lapin[1]+1].type == 3 && tab[lapin[0]][lapin[1]+1].poid != 1 ) {

			for ( x = 0 ; x < 12 ; x++ ) {

				for ( y = 0 ; y < 15 ; y++ ) {

					if ( tab[x][y].type == 5 ) {

						tab[x][y].type = 2;
						tab[x][y].form = "x";
						tab[x][y].poid = 0;

					}

				}

			}

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]][lapin[1]+1].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[1]++;
			tab[lapin[0]][lapin[1]+1].type = 0;
			tab[lapin[0]][lapin[1]].poid = 1;

		}

	} if ( lapin[0] < 11 ) {

		if ( q === "s" && tab[lapin[0]+1][lapin[1]].type == 0 && tab[lapin[0]+1][lapin[1]].poid != 1 ) {

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]+1][lapin[1]].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[0]++;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "s" && tab[lapin[0]+1][lapin[1]].type == 2 && tab[lapin[0]+1][lapin[1]].poid != 1 ) {

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]+2][lapin[1]].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			tab[lapin[0]+1][lapin[1]].form = "x";
			lapin[0] = lapin[0] + 2;
			tab[lapin[0]][lapin[1]].poid = 1;

		} else if ( q === "s" && tab[lapin[0]+1][lapin[1]].type == 4 && tab[lapin[0]+1][lapin[1]].poid != 1 ) {

			fin++;

		} else if ( q === "s" && tab[lapin[0]+1][lapin[1]].type == 3 && tab[lapin[0]+1][lapin[1]].poid != 1 ) {

			for ( x = 0 ; x < 12 ; x++ ) {

				for ( y = 0 ; y < 15 ; y++ ) {

					if ( tab[x][y].type == 5 ) {

						tab[x][y].type = 2;
						tab[x][y].form = "x";
						tab[x][y].poid = 0;

					}

				}

			}

            tab[lapin[0]][lapin[1]].poid = 0;
			tab[lapin[0]+1][lapin[1]].form = "L";
			tab[lapin[0]][lapin[1]].form = " ";
			lapin[0]++;
			tab[lapin[0]+1][lapin[1]].type = 0;
			tab[lapin[0]][lapin[1]].poid = 1;

		}

	}

	for ( x = 0 ; x < 12 ; x++ ) {

		for ( y = 0 ; y < 15 ; y++ ) {

			if ( tab [x][y].form === "+" ) {

				nbp++;

			}

		}

	} if ( nbp == 0 ) {

		for ( x = 0 ; x < 12 ; x++ ) {

			for ( y = 0 ; y < 15 ; y++ ) {

				if ( tab [x][y].form === "Q" ) {

					tab [x][y].form = "F";
					tab [x][y].type = 4;
					tab [x][y].poid = 0;

				}

			}

		}

	}

	return fin;

}

module.exports = deplace;
