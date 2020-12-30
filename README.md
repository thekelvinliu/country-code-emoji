# country-code-emoji

convert country codes (ISO 3166-1 alpha-2) to corresponding emoji flags (unicode regional indicator symbols)

## about

this is a completely dependency-free module to convert ascii letters to regional indicator symbols;
for valid country codes, this results in that country's emoji flag.
commonjs and es module builds are available via `package.json`'s **main** and **module**.
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
const { countryCodeEmoji, emojiCountryCode } = require('country-code-emoji');
countryCodeEmoji('US'); // returns '🇺🇸'
emojiCountryCode('🇺🇸'); // returns 'US'

// es module
import { countryCodeEmoji, emojiCountryCode } from 'country-code-emoji';
['AE', 'CN', 'GB'].map(countryCodeEmoji); // returns ['🇦🇪', '🇨🇳', '🇬🇧']
['🇦🇪', '🇨🇳', '🇬🇧'].map(emojiCountryCode); // returns ['AE', 'CN', 'GB']
```

this module exports a pair of functions to convert country codes to/from flag emojis.
the first is `countryCodeEmoji(cc)`.
it accepts a two-character (case-insensitive) country code and throws a `TypeError` if anything else is passed.
more specifically, `cc` is expected to be a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
to keep things simple, if `cc` a two letter string, but not an actual ISO 3166-1 alpha-2 code,
the regional indicator symbols corresponding to the letters in `cc` are returned.
the second is `emojiCountryCode(flag)`,
which accepts a flag emoji and similarly throws a `TypeError` if anything else is passed.

```javascript
// default export is countryCodeEmoji
import flag from 'country-code-emoji';

flag(); // throws TypeError
['Us', 'uS', 'us'].every(e => flag(e) === flag('US')); // returns true
flag('UK'); // returns '🇺🇰'
```
