const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  let server;

  before(() => {
    server = require('./api');
  });

  after(() => {
    server.close();
  });

  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
