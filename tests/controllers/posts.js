var request = require('supertest');
var express = require('express');
require('chai').should();
var proxyquire = require('proxyquire');
var path = require('path');
var controller, fakeConfig;
describe('postController', function(){

	beforeEach(function()
	{
		fakeConfig = {
			postDirectory: path.join(__dirname,'../fixtures')
		};
		app = express();
		app.get('/:postName',controller.get);

		
		controller = proxyquire(path.join(__dirname,'../../src/controllers/posts'),{
			'../config':fakeConfig
		});
	});
describe('get',function(){
it('should render a post',function(done){
	request(app).get('/test-post')
	.expect(200)
	.end(function(err,resp){
		if(err)
		{
			return done(err);
		}
		//Aseertions
		//resp.text
	});
});
});

});
