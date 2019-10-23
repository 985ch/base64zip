'use strict';

const zlib = require('zlib');

module.exports = {
  gzip: (input, options) => {
    const promise = new Promise(function(resolve, reject) {
      if (typeof input !== 'string') {
        input = JSON.stringify(input);
      }
      zlib.gzip(input, options, function(error, result) {
        if (error) {
          reject(Error(error));
        } else {
          if (options && options.base64) {
            resolve(new Buffer(result).toString('base64'));
          } else {
            resolve(result);
          }
        }
      });
    });
    return promise;
  },
  ungzip: (input, options) => {
    const promise = new Promise(function(resolve, reject) {
      if (typeof input === 'string') {
        input = new Buffer(input, 'base64');
      }
      zlib.gunzip(input, options, function(error, result) {
        if (error) {
          reject(Error(error));
        } else {
          if (options && options.parse) {
            resolve(JSON.parse(result));
          } else {
            resolve(result);
          }
        }
      });
    });
    return promise;
  },
};
