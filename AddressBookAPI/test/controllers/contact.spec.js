'use strict';

const assert = require('assert');
const sinon = require('sinon');
require('sinon-mongoose');
const Contact = require('../../models/contact');
const ctrl = require('../../controllers/contact');

// TODO à remplacer des mocks
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongoose.Promise = global.Promise;

describe('Contact Controller', () => {
  describe('method list', () => {
    let ContactMock;
    beforeEach(() => {
      ContactMock = sinon.mock(Contact);
    });

    afterEach(function () {
      ContactMock.restore(); // Unwraps the spy
    });

    it('should call res.json', async () => {
      const req = {};
      const res = {
        json: sinon.spy(),
      };
      const next = sinon.spy();
      const fakeData = [{_id: '123', prenom: 'John', nom: 'Doe'}];

      ContactMock.expects('find')
        .resolves(fakeData);

      await ctrl.list(req, res, next);

      // assert(next.calledOnce, 'next called');
      assert(res.json.calledOnce, 'res.json called');
      assert.deepEqual(res.json.getCall(0).args[0], fakeData);
    });
  });
});
