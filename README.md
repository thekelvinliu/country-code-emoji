# country-code-emoji

convert country codes (ISO 3166-1 alpha-2) to corresponding emoji flags (unicode regional indicator symbols)

[![Build Status](https://travis-ci.org/thekelvinliu/country-code-emoji.svg?branch=master)](https://travis-ci.org/thekelvinliu/country-code-emoji)

## about

this is a completely dependency-free module to convert ascii letters to regional indicator symbols;
for valid country codes, this results in that country's emoji flag.
commonjs, es module, and umd (transpiled to es5) builds are available
via `package.json`'s **main**, **module**, and **browser** properties, respectively.
it relies on `String.fromCodePoint` internally, but does not provide any polyfills.
if your environment does not support `String.fromCodePoint`,
grab a polyfill like [this one from mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#Polyfill).

## install

```bash
# npm
npm install country-code-emoji

# yarn
yarn add country-code-emoji
```

## usage

```javascript
// commonjs module
const flag = require('country-code-emoji');
flag('US'); // returns '🇺🇸'

// es module
import flag from 'country-code-emoji';
['AE', 'CN', 'GB'].map(flag); // returns [ '🇦🇪', '🇨🇳', '🇬🇧' ]
```

this module exports a single function with the signature `flag(cc)`.
`cc` should be atwo-character (case-insensitive) country code, and a `TypeError` will be thrown if it isn't.
more specifically, `cc` is expected to be a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
to keep things simple, if `cc` a two letter string, but not an actual ISO 3166-1 alpha-2 code,
the regional indicator symbols corresponding to the letters in `cc` are returned.

```javascript
import flag from 'country-code-emoji';

flag(); // throws TypeError
['Us', 'uS', 'us'].every(e => flag(e) === flag('US')); // returns true
flag('UK'); // returns '🇺🇰'
```
