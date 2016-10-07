function hashtagsDAO(connection){

	this._connection = connection();
}

hashtagsDAO.prototype.salvar = function(hashtag){

		

			this._connection.open(function(err, mongoclient){

		mongoclient.collection("hashtags", function(err, collection){

			collection.insert(hashtag);

			mongoclient.close();
		} );
	});
	
			
	}

hashtagsDAO.prototype.remover = function(hashtag){




		this._connection.open(function	(err, mongoclient){

				mongoclient.collection("hastags" , function(err, collection){

						collection.remove(hashtag);

						mongoclient.close();
				});

		});
}


hashtagsDAO.prototype.listar = function(req , res){

	this._connection.open(function(err, mongoclient){

		mongoclient.collection("hashtags", function(err, collection){

			collection.find().toArray(function(err, result){

				
				res.render('home', {hashtag: {}, hashtaglist: result, validacao:{}})
				
			});

			mongoclient.close();
		} );
	});
}

hashtagsDAO.prototype.remover = function(req , res, hashtag){

	this._connection.open(function(err, mongoclient){

		mongoclient.collection("hashtags", function(err, collection){

			collection.remove(hashtag);

			res.redirect("listar");

			mongoclient.close();
		} );
	});


}

module.exports = function(){

	return hashtagsDAO;
}

