module.exports.index = function(application, req, res){

	
	res.render('home', {hashtag : {}, hashtaglist: {}, validacao: {}});

	

}

module.exports.pesquisar = function(application, req, res){

	var instagram = application.config.instagram_api;
	var dadosForm = req.body;

	req.assert('tag' , 'Faltando Hashtag de pesquisa').notEmpty();

	var erros = req.validationErrors();

	if(erros) {

		res.render('home', {hashtag: {} , hashtaglist : {}, validacao : erros});

		return;
	}	

	instagram.tag_search(dadosForm.tag, function(err, result, remaining, limit) {	
			
			
			res.render('home', {hashtag : result , hashtaglist:{}, validacao: {}});

			
		});
}

module.exports.salvar = function(application, req, res){

	
	var dadosForm = req.body;
	var connection = application.config.dbConnection;


	var hashtagsDAO = new application.app.models.hashtagsDAO(connection);

	
	
	hashtagsDAO.salvar(dadosForm);	
	
	res.render('home', {hashtag : {} , hashtaglist:{}, validacao: {}});

	
}

module.exports.listar = function(application, req, res){

	var connection = application.config.dbConnection;
	var hashtagsDAO = new application.app.models.hashtagsDAO(connection);

	hashtagsDAO.listar(req , res);


}

module.exports.remover = function(application, req, res){

	var dadosForm = req.body;

	var connection = application.config.dbConnection;
	var hashtagsDAO = new application.app.models.hashtagsDAO(connection);

	hashtagsDAO.remover(req , res, dadosForm);


}


