import consolidate from './consolidate';

const attributes = {
  username: { defaultValue: 'soyjavi', required: true },
  password: { required: true },
};

describe('Components:Form:modules:consolidate', () => {
  it('default', () => {
    expect(consolidate()).toEqual({});
  });

  it('when value does not have the defaultValue', () => {
    expect(consolidate(attributes)).toEqual({ username: 'soyjavi', password: undefined });
  });

  it('when value already has the defaultValue', () => {
    expect(consolidate(attributes, { username: 'javi' })).toEqual({ username: 'javi', password: undefined });
  });
});
