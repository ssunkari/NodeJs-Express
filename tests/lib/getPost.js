var path = require('path');
var getPost = require('../../src/lib/getPost');
require('chai').should();
describe('Blog',function(){
	describe.only('getPost',function(){
		it('should read a post from disk',function(done){
			getPost(path.join(__dirname,'../fixtures/test-post.txt')).then(function(data){
				data.title.should.equal('test-post');
				data.content.should.equal('additive dry stout noble hops becher barrel craft beer reinheitsgebot squares. barley black malt keg, " dextrin');
				data.excerpt.should.equal('additive dry stout noble hops becher barrel craft beer reinheitsgebot squares. barley black malt keg');
				done();
			}).catch(done);
		});
	});
});