module.exports = function(application){

	//application.app.controllers.home.index(application, req, res);	

	application.get('/', function(req, res) {
		
		application.app.controllers.home.index(application, req, res);
		
	});

	application.post('/pesquisar', function(req, res) {
		
		application.app.controllers.home.pesquisar(application, req, res);
		
	});

	application.post('/salvar', function(req, res) {
		
		application.app.controllers.home.salvar(application, req, res);
		
	});

	application.post('/listar', function(req, res){
		application.app.controllers.home.listar(application, req, res);
	});
	application.get('/listar', function(req, res){
		application.app.controllers.home.listar(application, req, res);
	});

	application.post('/remover', function(req, res){
		application.app.controllers.home.remover(application, req, res);
	});
	
	}