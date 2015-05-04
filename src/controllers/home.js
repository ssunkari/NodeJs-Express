var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');

var config = require(path.join(__dirname, '../config'));

var getPost = require('../lib/getPost');

module.exports = function(req, res, next) {

	fs.readdirAsync(config.postDirectory)
		.then(function(files) {
			return files.map(function(file) {
				return path.join(config.postDirectory, file);
			}).map(getPost);

		})
		.then(Promise.all)
		.then(function(postExcerpts) {
			res.render('index', {
				title: 'Express',
				files: postExcerpts
			});
		}).catch(next);

};