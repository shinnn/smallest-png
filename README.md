# smallest-png

[![npm version](https://img.shields.io/npm/v/smallest-png.svg)](https://www.npmjs.com/package/smallest-png)
[![Build Status](https://travis-ci.com/shinnn/node-smallest-png.svg?branch=master)](https://travis-ci.com/shinnn/node-smallest-png)

A [Node](https://nodejs.org/) module to create a [`Buffer`](https://nodejs.org/api/buffer.html#buffer_class_buffer) of [theoretically smallest PNG](https://github.com/mathiasbynens/small/blob/master/png-transparent.png)

```javascript
const smallestPng = require('smallest-png');

smallestPng(); //=> <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 ...>
smallestPng().length; //=> 67
```

Suitable for test fixtures.

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install smallest-png
```

## API

```javascript
const smallestPng = require('smallest-png');
```

### smallestPng()

Return: `Buffer`

## License

Copyright (c) 2014 - 2019 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
