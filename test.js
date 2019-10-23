'use strict';

const { gzip, ungzip } = require('./');

const text = 'A simple node.js compress/decompress module';
const json = { name: '985ch', email: 'xxxxx@xxx.com' };

async function test(name, data, options) {
  console.log(`------- test ${name} --------`);
  const zipped = await gzip(data, options);
  if (options && options.base64) {
    console.log(`base64:${zipped}`);
  } else {
    console.log(`length:${zipped.length}`);
  }
  const result = await ungzip(zipped, options);
  if (options && options.parse) {
    console.log(result);
  } else {
    console.log(result.toString());
  }
}

describe('Test', async function() {
  it('Text', async function() {
    await test('text', text);
    await test('text with base64', text, { base64: true });
  });
  it('Json', async function() {
    await test('json', json);
    await test('json with parse', json, { parse: true });
    await test('json with base64', json, { base64: true });
    await test('json with parse and base64', json, { parse: true, base64: true });
  });
});
