// country code regex
const CC_REGEX = /^[a-z]{2}$/i;

// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397;

/**
 * convert country code to corresponding emoji flag
 * @param {string} cc - country code string
 * @returns {string} country code emoji
 */
export default function countryCodeEmoji(cc) {
  if (!CC_REGEX.test(cc)) {
    const type = typeof cc;
    throw new TypeError(
      `cc argument must be an ISO 3166-1 alpha-2 string, but got '${
        type === 'string' ? cc : type
      }' instead.`,
    );
  }

  const chars = [...cc.toUpperCase()].map(c => c.charCodeAt() + OFFSET);
  return String.fromCodePoint(...chars);
}
