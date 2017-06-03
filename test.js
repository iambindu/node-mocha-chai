 var assert=require("chai").assert,
      expect=require("chai").expect,
      should=require("chai").should(),
      supertest=require("supertest"),
server=supertest.agent("http://localhost:4000")
 describe("Testing Contact list app",function(){
 	it("should get all contacts",function(done){
 		server.get("/getContacts")
 		.expect(200)
 		.expect('content-type',/json/)
 		.end(function(err,res){
 			console.log(res.body);
 			res.body.forEach(function(data){
 				data.should.have.property("name")
 				data.name.should.equal("mahesh")
 				data.name.should.have.lengthOf(5)
 			})
 			done();
 		})
 	})







 	
 /*it("my First test case",function(){
 	var foo="uma";
 	var tea={flavors:"sweet"};
 	// assert.typeOf(foo, 'string');

 	// expect(foo).to.be.a('string');
 	// foo.should.be.a('string');
 	foo.should.equal("uma");
 	foo.should.have.lengthOf(3);
 	tea.should.have.property('flavors')
 })
 */
 });
 
 