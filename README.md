# base64zip

![node version][node-image]
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[node-image]: https://img.shields.io/badge/node-%3E%3D8-blue.svg
[npm-image]: https://img.shields.io/npm/v/base64zip.svg?style=flat-square
[npm-url]: https://npmjs.org/package/base64zip
[travis-image]: https://img.shields.io/travis/985ch/base64zip.svg?style=flat-square
[travis-url]: https://travis-ci.org/985ch/base64zip
[codecov-image]: https://img.shields.io/codecov/c/github/985ch/base64zip.svg?style=flat-square
[codecov-url]: https://codecov.io/github/985ch/base64zip?branch=master
[david-image]: https://img.shields.io/david/985ch/base64zip.svg?style=flat-square
[david-url]: https://david-dm.org/985ch/base64zip
[download-image]: https://img.shields.io/npm/dm/base64zip.svg?style=flat-square
[download-url]: https://npmjs.org/package/base64zip

This module encapsulates gzip compression and base64 encoding support.

## [中文说明](./README.zh_CN.md)
## Install

```bash
$ npm i base64zip --save
```

## Usage
```js
'use strict';

const { gzip, ungzip } = require('base64zip');

let zipped = await gzip('some text');
let unzipped = await ungzip(zipped);
```
More usage can be found in [test.js](./test.js)

## gzip(data, options)
* **data** can be a string or any serializable object
* In addition to the options that come with Node.js, **options** also support the extended option **base64**.
* The buffer is returned by default, but the base64 string is returned when **options.base64** is true.
## ungzip(data, options)
* **data** should be a valid buffer or base64 string
* In addition to the options that come with Node.js, **options** also support the extended option **parse**.
* The buffer is returned by default, but the result of JSON.parse is returned when **options.parse** is true.

## Unit tests

```sh
npm test
```

## License

[MIT](LICENSE)<br />
This README was translate by [google](https://translate.google.cn)