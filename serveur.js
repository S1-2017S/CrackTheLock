"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

var req_accueil = require("./req_accueil.js");
var req_commencer = require("./req_commencer.js");
var req_connexion = require("./req_connexion.js");
var req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
var req_inscrire = require("./req_inscrire.js");
var req_acces_regles = require("./req_acces_regles.js");
var req_valider = require("./req_valider.js");
var req_afficher_connection = require("./req_afficher_connection.js");
var req_retour = require("./req_retour.js");
var req_jouer = require("./req_jouer.js");
var req_quitter = require("./req_quitter.js");
var req_retour_menu = require("./req_retour_menu.js");
var req_deplacer = require("./req_deplacer.js");
var req_static = require("./req_static.js");
var req_erreur = require("./req_erreur.js");

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
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_accueil':
				req_accueil(req, res, query);
				break;
			case '/req_afficher_connection':
				req_afficher_connection(req, res, query);
				break;
			case '/req_valider':
				req_valider(req, res, query);
				break;
			case '/req_deplacer':
				req_deplacer(req, res, query);
				break;
			case '/req_connexion':
				req_connexion(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_acces_regles':
				req_acces_regles(req, res, query);
				break;
			case '/req_retour':
				req_retour(req, res, query);
				break;
			case '/req_jouer':
				req_jouer(req, res, query);
				break;
			case '/req_quitter':
				req_quitter(req, res, query);
				break;
			case '/req_retour_menu':
				req_retour_menu(req, res, query);
				break;
			case '/req_deplacer':
				req_deplacer(req, res, query);
				break;
			default:
				req_static(req, res, pathname);
				break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};


var mon_serveur = http.createServer(traite_requete);
var port = 5000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
