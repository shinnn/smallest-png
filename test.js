'use strict';

const {get} = require('https');

const smallestPng = require('.');
const test = require('tape');

test('smallestPng', async t => {
	t.plan(1);

	get('https://raw.githubusercontent.com/mathiasbynens/small/master/png-transparent.png', async response => {
		const expected = [];
		let len = 0;

		for await (const chunk of response) {
			expected.push(chunk);
			len += chunk.length;
		}

		t.ok(
			smallestPng.equals(Buffer.concat(expected, len)),
			'should be a Buffer of the theoretically smallest PNG.'
		);
	});
});
