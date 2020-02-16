import React from 'react';
import renderer from 'react-test-renderer';

import set from './set';

const DATA = {
  username: 'soyjavi',
  social: {
    twitter: 'soyjavi',
  },
};

describe('<FORM.set()>', () => {
  it('default', () => {
    const value = set();
    expect(value).toEqual({});
  });

  it('no update any key', () => {
    const value = set(DATA);
    expect(value).toEqual(DATA);
  });

  it('update a known key', () => {
    const value = set(DATA, 'username', 'soyjavi.v2');
    expect(value).toEqual({
      username: 'soyjavi.v2',
      social: { twitter: 'soyjavi' },
    });
  });

  it('update a known key in a known sub-schema', () => {
    const value = set(DATA, 'social.twitter', 'soyjavi.v2');
    expect(value).toEqual({
      username: 'soyjavi',
      social: { twitter: 'soyjavi.v2' },
    });
  });

  it('add a new property', () => {
    const value = set(DATA, 'bio', 'soyjavi');
    expect(value).toEqual({
      username: 'soyjavi',
      bio: 'soyjavi',
      social: { twitter: 'soyjavi' },
    });
  });

  it('add a new property in a known sub-schema', () => {
    const value = set(DATA, 'social.facebook', 'soyjavi');
    expect(value).toEqual({
      username: 'soyjavi',
      social: { twitter: 'soyjavi', facebook: 'soyjavi' },
    });
  });
});
