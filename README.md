# country-code-emoji
convert country codes (ISO 3166-1 alpha-2) to corresponding emoji flags (unicode regional indicator symbols)

[![Build Status](https://travis-ci.org/thekelvinliu/country-code-emoji.svg?branch=master)](https://travis-ci.org/thekelvinliu/country-code-emoji)

## Install
```bash
$ npm i --save country-code-emoji
```

## Usage
In ES6:
```es6
import { flag } from 'country-code-emoji';
flag('US'); // returns '🇺🇸'
// alternatively,
import cce from 'country-code-emoji';
cce.flag('CN'); // returns '🇨🇳'
```
In ES5:
```node
var flag = require('country-code-emoji').flag;
flag('GB'); // returns '🇬🇧'
// alternatively,
var cce = require('country-code-emoji');
cce.flag('AE'); // returns '🇦🇪'
```
This module exposes a single function with signature: `flag(country_code)`.
It expects `country_code` to be a string, and will throw a `TypeError` if it isn't.
More specifically, `country_code` is expected to be a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
Note, `country_code` can also be a mix of upper and lower case characters.
To keep things simple, if `country_code` a two letter string, but not an actual ISO 3166-1 alpha-2,
the regional indicator symbols corresponding to the letters in `country_code` are returned.
```es6
import { flag } from 'country-code-emoji';
flag(); // returns TypeError
['Us', 'uS', 'us'].every(e => flag(e) === flag('US')); // returns true
flag('UK'); // returns '🇺🇰'
```

## About
This module is written in ES6, and transpiled to ES5 using [babel](http://babeljs.io/).
It is completely dependency-free and relies on `String.fromCodePoint()` to convert ASCII letters to regional indicator symbols.
I decided to make it when designing another project, [mapper](https://github.com/thekelvinliu/mapper).
As always, let me know if you have any questions or concerns.
