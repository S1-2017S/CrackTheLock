"use strict"

var fs = require("fs");
var repJSON;
var x = Number (x);
var y = Number (y);
var tr;
var tab = {};
var j = {}

var map =  [["m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m","m"],
			["m","v","v","v","v","m","v","v","v","v","m","v","v","v","v","v","v","v","v","m"],
			["m","v","j","v","v",{'t':"l",'c':"1"},"v","v","v","v","m","v","v","v","v","v","v","v","v","m"],
			["m",{'t':"c",'c':"1"},"v","v","v","m","v",{'t':"pp",'c':"6"},"v","v",{'t':"p",'c':"5"},"v","v","v","v","v",{'t':"pp",'c':"5"},"v","v","m"],
			["m","v","v","v","v","m","v","v","v","v","m","v","v","v","v","v","v","v","v","m"],
			["m","m",{'t':"p",'c':"1"},"m","m","m","v","v","v","v","m","v","v","v","v","v","v","v","v","m"],
			["m","v","v","ft","m","m","m","m","m","m","m","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","m","v","v","v","v","v","v","m","v","v","v","v","v","v","v","m"],
			["m","v","v","v","m","m","m","m","v","v","v","m",{'t':"p",'c':"6"},"m","m","v","v","v","v","m"],
			["m","v",{'t':"pp",'c':"2"},"v","m","s","v",{'t':"p",'c':"7"},"v","v","v","v","v","v","m","v","v","v","v","m"],
			["m","v","v","v","m","m","m","m","v","v",{'t':"pp",'c':"7"},"v","v","v","m","v","v","v","v","m"],
			["m","v","v","v","m","v","v","v","v","v","v","v","v","v","m","v","v","v","v","m"],
			["m","v","v","v","m","m","m","m","m","m","m","m","m","m","m","v","v","v","v","m"],
			["m","v","v","v","m","m","m","m","m","m","v","v","v","m","m","v","v","v","v","m"],
			["m","v","v","v",{'t':"p",'c':"2"},"v","m","v","v",{'t':"p",'c':"3"},"v","v","v","m","m","m",{'t':"p",'c':"8"},"m","m","m"],
			["m","v","v","v","m","v","m","v","m","m","v","v","v","m","v","v","v","v","v","m"],
			["m","v","v","v","m","v","m",{'t':"pp",'c':"3"},"m","m","v","v","v",{'t':"p",'c':"4"},"v","v","v","v","v",{'t':"l",'c':"8"}],
			["m","v","v","v","m","v","m","v","m","m","v","v","v","m","v","v","v","v","v","m"],
			["m","v","v","v","m","v","v","v","v",{'t':"l",'c':"4"},"v","v","v","m","v","v","v","v","v","m"],
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
fs.writeFileSync("map_2-5.json", repJSON, "UTF-8");
