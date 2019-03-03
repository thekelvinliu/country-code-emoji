/* eslint-env jest */
import flag from '.';

describe('countryCodeEmoji', () => {
  describe.each([
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
    '🇺🇸',
  ])('`%p` input', input => {
    it('should throw a `TypeError`', () => {
      expect(() => flag(input)).toThrow(TypeError);
    });
  });

  describe.each([
    ['US', '🇺🇸'],
    ['Us', '🇺🇸'],
    ['uS', '🇺🇸'],
    ['us', '🇺🇸'],
    ['AE', '🇦🇪'],
    ['CN', '🇨🇳'],
    ['GB', '🇬🇧'],
    ['UK', '🇺🇰'],
  ])('`%p` input', (input, expected) => {
    it(`should return '${expected}'`, () => {
      expect(flag(input)).toBe(expected);
    });
  });
});
