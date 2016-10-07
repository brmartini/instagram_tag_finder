
/* importando os modulos a serem utilizados*/
var express = require ('express');
var consign = require('consign');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var app = express();

/* configurando os parametros de exibição do app */

app.set('view engine', 'ejs');

app.set('views','./app/views');

app.use(express.static('./app/public'));

/* Inicializando o BodyParser para receber os dados do front */

app.use(bodyParser.urlencoded({extended: true}));

/* inicializando o express validator*/

app.use(expressValidator());



/* Inicializando o modulo consign para direcionar os modulos automaticamente para a execução da aplicacao (AutoLoad) */
consign()
	.include('app/routes')
	.then('config/instagram_api.js')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;



