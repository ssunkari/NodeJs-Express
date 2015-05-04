var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var getPost = require('../lib/getPost');
var path = require('path');

var config = require(path.join(__dirname,'../config'));
exports.get = function(req,res,next){
	getPost(path.join(config.postDirectory,req.params.postName+'.txt')).then(function(fileContents)
		{
			//Renders Json Objects
			//res.json(fileContents);
			res.render('post',fileContents);
		});
};