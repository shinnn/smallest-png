# smallest-png

[![NPM version](https://badge.fury.io/js/smallest-png.svg)](https://www.npmjs.org/package/smallest-png)
[![Build Status](https://travis-ci.org/shinnn/node-smallest-png.svg?branch=master)](https://travis-ci.org/shinnn/node-smallest-png)
[![Build status](https://ci.appveyor.com/api/projects/status/360kg47fjmk0qa4f)](https://ci.appveyor.com/project/ShinnosukeWatanabe/node-smallest-png)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-smallest-png.svg)](https://coveralls.io/r/shinnn/node-smallest-png)
[![devDependency Status](https://david-dm.org/shinnn/node-smallest-png/dev-status.svg)](https://david-dm.org/shinnn/node-smallest-png#info=devDependencies)

A [Node](http://nodejs.org/) module to create a buffer of [theoretically smallest PNG](https://github.com/mathiasbynens/small/blob/master/png-transparent.png)

```javascript
var smallestPng = require('smallest-png');

smallestPng(); //=> <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 ...>
smallestPng().length; //=> 67
```

It is useful to test image-related modules.

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html).

```
npm install smallest-png
```

## API

```javascript
var smallestPng = require('smallest-png');
```

### smallestPng()

Return: [`Buffer`](http://nodejs.org/api/buffer.html#buffer_buffer)

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
