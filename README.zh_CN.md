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

这个模块简单的封装了gzip压缩和base64编码支持功能

## 安装

```bash
$ npm i base64zip --save
```

## 使用方法
```js
'use strict';

const { gzip, ungzip } = require('base64zip');

let zipped = await gzip('some text');
let unzipped = await ungzip(zipped);
```
在[test.js](./test.js)中可以看到更多用法

## gzip(data, options)
* data可以是字符串或者任意可序列化的对象
* options除了支持node自带的属性外，还支持扩展属性base64
* 默认返回buffer，但options.base64为true时返回base64字符串
## ungzip(data, options)
* data应为有效的buffer或base64字符串
* options除了支持node自带的属性外，还支持扩展属性parse
* 默认返回buffer，但options.parse为true时返回用JSON.parse处理之后的对象

## 测试

```sh
npm test
```

## License

[MIT](LICENSE)
