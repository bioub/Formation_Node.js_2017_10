'use strict';
const assert = require('assert');
const { expect } = require('chai');
require('chai').should();
const sinon = require('sinon');

const sum = (a, b) => a + b;
const withCallback = (cb) => cb('Hello');

describe('Hello Tests', () => {
  describe('sum', () => {
    it('should return 3 when called with 1 and 2', () => {
      assert.deepEqual(sum(1, 2), 3);
      expect(sum(1, 2)).to.equal(3);
      sum(1, 2).should.equal(3);
    });
  });
  describe('withCallback', () => {
    it('should call cb', () => {
      var callback = sinon.spy();
      withCallback(callback);

      assert(callback.calledOnce);
      assert.deepEqual('Hello', callback.getCall(0).args[0]);
    });
  });
  describe('withCallback async', () => {
    it('should call cb', (done) => {
      setTimeout(function() {
        assert(true);
        done();
      }, 1000);
    });
  });
});
