# changelog

all notable changes to this project will be documented in this file.

the format is based on [keep a changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

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
