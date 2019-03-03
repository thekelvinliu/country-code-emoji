import analyzer from 'rollup-plugin-analyzer';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const input = 'src/index.js';
const isDev = process.env.NODE_ENV === 'development';
const plugins = [
  analyzer({
    stdout: true,
    hideDeps: true,
  }),
  !isDev && terser({ keep_fnames: true }),
];

// commonjs and es module builds use babel.config.js
const config = {
  input,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  plugins: plugins.concat(babel()),
};

// umd builds use embeded babel config for es5
const umdConfig = {
  input,
  output: {
    file: pkg.browser,
    format: 'umd',
    name: 'flag',
    sourcemap: true,
  },
  plugins: plugins.concat(babel({ presets: ['@babel/preset-env'] })),
};

export default [config, umdConfig];
