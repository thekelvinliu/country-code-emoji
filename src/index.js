'use strict';

export function flag(country_code) {
  // decimal offset to turn caps to regional indicator symbol code points
  const OFFSET = 127397;
  // ensure country code is all caps
  const cc = country_code.toUpperCase();
  // return the emoji flag corresponding to country_code or null
  return (/^[A-Z]{2}$/.test(cc))
    ? String.fromCodePoint(...[...cc].map(c => c.charCodeAt() + OFFSET))
    : null;
}
