import {get} from 'https';
import {once} from 'events';

import smallestPng from './index.js';
import test from 'tape';

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
