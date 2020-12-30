/* eslint-env jest */
import { countryCodeEmoji, emojiCountryCode } from '.';

const INVALID_INPUTS = [
  undefined,
  null,
  false,
  true,
  100,
  [],
  {},
  's',
  'very long string',
  'ÀÈ',
  'ûŝ',
  '20',
];

const VALID_INPUTS = [
  ['AE', '🇦🇪'],
  ['CN', '🇨🇳'],
  ['GB', '🇬🇧'],
  ['UK', '🇺🇰'],
  ['US', '🇺🇸'],
];

describe('countryCodeEmoji', () => {
  describe.each(INVALID_INPUTS.concat('🇺🇸'))('`%p` input', input => {
    it('should throw a `TypeError`', () => {
      expect(() => countryCodeEmoji(input)).toThrow(TypeError);
    });
  });

  describe.each([...VALID_INPUTS, ['Us', '🇺🇸'], ['uS', '🇺🇸'], ['us', '🇺🇸']])(
    '`%p` input',
    (input, expected) => {
      it(`should return '${expected}'`, () => {
        expect(countryCodeEmoji(input)).toBe(expected);
      });
    },
  );
});

describe('emojiCountryCode', () => {
  describe.each(INVALID_INPUTS.concat('🙃'))('`%p` input', input => {
    it('should throw a `TypeError`', () => {
      expect(() => emojiCountryCode(input)).toThrow(TypeError);
    });
  });

  describe.each(VALID_INPUTS.map(([cc, flag]) => [flag, cc]))(
    '`%p` input',
    (input, expected) => {
      it(`should return '${expected}'`, () => {
        expect(emojiCountryCode(input)).toBe(expected);
      });
    },
  );
});
