'use strict';

const {get} = require('https');
const {once} = require('events');

const smallestPng = require('.');
const test = require('tape');

test('smallestPng', async t => {
	const [response] = await once(get('https://raw.githubusercontent.com/mathiasbynens/small/master/png-transparent.png'), 'response');
	const expected = [];

	for await (const chunk of response) {
		expected.push(chunk);
	}

	t.ok(
		smallestPng.equals(Buffer.concat(expected, Number(response.headers['content-length']))),
		'should be a Buffer of the theoretically smallest PNG.'
	);

	t.end();
});
