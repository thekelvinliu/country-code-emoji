/* eslint-disable strict, import/no-extraneous-dependencies */

'use strict';

const { transformSync } = require('esbuild');

exports.process = (content, filename) =>
  transformSync(content, {
    format: 'cjs',
    loader: 'js',
    sourcefile: filename,
    sourcemap: true,
    target: 'node10',
  });
