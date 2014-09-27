'use strict';

var fs = require('fs');

var test = require('tape');
var smallestJpegBuffer = require('require-main')();

test('smallestPngBuffer()', function(t) {
  t.plan(1);

  t.deepEqual(
    smallestJpegBuffer(),
    fs.readFileSync('test/fixture.png'),
    'should create a buffer of smallest PNG.'
  );
});
