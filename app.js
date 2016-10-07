/* importar as configuracoes do servidor */

var application = require('./config/server');

var server = application.listen(3000, function(){

	console.log('Servidor Online na porta 3000')
});





