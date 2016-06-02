'use strict';

// decimal offset between ASCII capitals and regional indicator symbols
const OFFSET = 127397;

// module exposes a single function
export function flag(country_code) {
  // only allow string input
  if (typeof country_code !== 'string')
    throw new TypeError('argument must be a string');
  // ensure country code is all caps
  const cc = country_code.toUpperCase();
  // return the emoji flag corresponding to country_code or null
  return (/^[A-Z]{2}$/.test(cc))
    ? String.fromCodePoint(...[...cc].map(c => c.charCodeAt() + OFFSET))
    : null;
}
