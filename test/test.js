var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with Test POC', function(done) {
    request(app).get('/').expect('Test POC', done);
  });
});