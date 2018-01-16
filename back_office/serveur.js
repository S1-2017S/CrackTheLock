//=========================================================================
// Serveur back_office
// Auteur : Yann Sowa
// Version : 16/12/2017
//=========================================================================

"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_menu = require("./req_menu.js");
var req_creer_map = require("./req_creer_map.js");
var req_lister_map = require("./req_lister_map.js");
var req_retour_menu = require("./req_retour_menu.js");
var req_afficher_map = require("./req_afficher_map.js");

//-------------------------------------------------------------------------
// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//-------------------------------------------------------------------------

var traite_requete = function (req, res) {

	var ressource;
	var requete;
	var pathname;;
	var query;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	// ROUTEUR

	try {
		switch (pathname) {
			case '/':
			case '/req_menu':
				req_menu(req, res, query);
				break;
			case '/req_lister_map':
				req_lister_map(req, res, query);
				break;
			case '/req_retour_menu':
				req_retour_menu(req, res, query);
				break;
			case '/req_affichage_map':
				req_affichage_map(req, res, query);
				break;
			case '/req_creer_map':
				req_creer_map(req, res, query);
				break;
			default:
				req_static(req, res, query);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};

//-------------------------------------------------------------------------
// CREATION ET LANCEMENT DU SERVEUR
//-------------------------------------------------------------------------

var mon_serveur = http.createServer(traite_requete);
var port = 3000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
