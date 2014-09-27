'use strict';

var fs = require('fs');

var test = require('tape');
var smallestPng = require('require-main')();

test('smallestPngBuffer()', function(t) {
  t.plan(1);

  t.deepEqual(
    smallestPng(),
    fs.readFileSync('test/fixture.png'),
    'should create a buffer of smallest PNG.'
  );
});
