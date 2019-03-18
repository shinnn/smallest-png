'use strict';

const {readFile} = require('fs').promises;

const smallestPng = require('..');
const test = require('tape');

test('smallestPngBuffer()', async t => {
  t.deepEqual(
    smallestPng(),
    await readFile('test/fixture.png'),
    'should create a buffer of smallest PNG.'
  );

  t.end();
});
