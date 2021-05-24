# changelog

all notable changes to this project will be documented in this file.

the format is based on [keep a changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0] - 2021-05-23

### added

- esm build with `.mjs` extension for official nodejs esm import support

## [2.2.0] - 2020-12-30

### added

- `emojiCountryCode` named export to convert from flag emoji to country code
- more usage info to readme

## [2.1.0] - 2020-12-16

### added

- typescript types

## [2.0.0] - 2020-12-13

### added

- export map
- `countryCodeEmoji` named export

### changed

- build to use [esbuild](https://github.com/evanw/esbuild) instead of rollup

### removed

- browser umd build
- travis ci

## [1.0.0] - 2019-03-03

### added

- commonjs, es module, and umd builds

### changed

- single, default export
- throw `TypeError` for any input that isn't a country code string
- [rollup](https://rollupjs.org/guide/en) for cjs, es, and umd builds
- [jest](https://jestjs.io) for unit testing

### removed

- gulp as build tool
- named export

## [0.0.1] - 2016-06-02

### added

- initial release
