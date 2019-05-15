import {strict as assert} from 'assert';
import {get} from 'https';
import {once} from 'events';

import smallestPng from './index.js';
import test from 'testit';

test('Be a Buffer of the theoretically smallest PNG', async () => {
	const [response] = await once(get('https://raw.githubusercontent.com/mathiasbynens/small/master/png-transparent.png'), 'response');
	const expected = [];

	for await (const chunk of response) {
		expected.push(chunk);
	}

	assert(smallestPng.equals(Buffer.concat(expected, Number(response.headers['content-length']))));
});
