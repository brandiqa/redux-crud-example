'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('contact service', function() {
  it('registered the contacts service', () => {
    assert.ok(app.service('contacts'));
  });
});
