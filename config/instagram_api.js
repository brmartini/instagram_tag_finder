var instagram = require('instagram-node').instagram();

		

		instagram.use({ client_id: 'eb173599d19040b8b88cb4fc425fc692',
        	client_secret: '24788e6f59ba4fb2adf4ec641b77c7ca' , 
			access_token: '321562367.eb17359.1e76797a77cb42e38df810175cb12f6e' });

module.exports = function  (){

	return instagram;
}