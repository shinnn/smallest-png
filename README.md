# smallest-png

[![npm version](https://img.shields.io/npm/v/smallest-png.svg)](https://www.npmjs.com/package/smallest-png)
[![Build Status](https://travis-ci.com/shinnn/smallest-png.svg?branch=master)](https://travis-ci.com/shinnn/smallest-png)

A `Buffer` of [the theoretically smallest PNG](https://github.com/mathiasbynens/small/blob/master/png-transparent.png)

```javascript
const smallestPng = require('smallest-png');
//=> <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 01 00 00 00 01 08 06 00 00 00 1f ...>

smallestJpeg.length; //=> 67
```

Suitable for test fixtures.

```javascript
const {width, height} = somePngParserFunction(smallestPng);

console.assert(width === 1);
console.assert(height === 1);
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install smallest-png
```

## API

```javascript
const smallestPng = require('smallest-png');
```

### smallestPng

Type: [`Buffer`](https://nodejs.org/api/buffer.html#buffer_class_buffer)

## Related

* [smallest-jpeg](https://github.com/shinnn/smallest-jpeg) — A [JPEG](https://jpeg.org/jpeg/) version

## License

[MIT No Attribution](./LICENSE) © 2019 Shinnosuke Watanabe
