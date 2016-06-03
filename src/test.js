'use strict';

import { assert, expect } from 'chai';
import { flag } from './index';

// char code constants
const UPPER_A = 'A'.charCodeAt();
const LOWER_A = 'a'.charCodeAt();

// functions
const createUpperCaseString = (i, j) =>
  String.fromCodePoint(...[i, j].map(e => e + UPPER_A));
const createLowerCaseString = (i, j) =>
  String.fromCodePoint(...[i, j].map(e => e + LOWER_A));

describe('string input', () => {
  it('should not be null for alpha strings of length 2', () => {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        assert.isNotNull(flag(createUpperCaseString(i, j)));
        assert.isNotNull(flag(createLowerCaseString(i, j)));
      }
    }
  });
  it('should be null for any strings not of length 2', () => {
    assert.isNull(flag(''));
    assert.isNull(flag('A'));
    assert.isNull(flag('AAA'));
  });
  it('should be null for non-alpha strings', () => {
    assert.isNull(flag('~wow~'));
    assert.isNull(flag('#cool'));
  });
});

describe('non-string input', () => {
  it('should throw a TypeError', () => {
    const empty = {};
    [true, false, null, 100, empty, empty.some_key]
      .map(e => (() => {
        flag(e);
      }))
      .forEach(fn => {
        expect(fn).to.throw(TypeError);
      });
  });
});
