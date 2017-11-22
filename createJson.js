"use strict"

var fs = require("fs");
var repJSON;

var map = [["v","v","v","m","v","v","v"],
		   ["v","v","v","m","v","v","v"],
		   ["v","v","v","m","v","v","v"],
		   ["v","j","v","p","v","s","v"],
	   	   ["v","v","v","m","v","v","v"],
		   ["v","v","v","m","v","v","v"],
	   	   ["v","v","v","m","v","v","v"]];

repJSON = JSON.stringify(map);
fs.writeFileSync("map_1-2.json", repJSON, "UTF-8");
