'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');
const Contact = require('../models/contact');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app');

// TODO à remplacer des mocks
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongoose.Promise = global.Promise;

describe('Functionnal Tests', () => {
  describe('GET /api/contacts', () => {
    let ContactMock;
    beforeEach(() => {
      ContactMock = sinon.mock(Contact);
    });

    afterEach(function () {
      ContactMock.restore(); // Unwraps the spy
    });

    it('should returns status code 200', (done) => {
      ContactMock.expects('find').resolves([]);

      chai.request(app)
        .get('/api/contacts')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
