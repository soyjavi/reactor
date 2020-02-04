import { queryString } from './queryString';

describe('queryString()', () => {
  it('default', () => {
    let value = queryString();
    expect(value).toBe('');
  });

  it('pass a object', () => {
    let value = queryString({
      greetings: 'hello world',
      year: 1980,
      username: 'soyjavi',
      machines: ['macbook pro', 'macbook'],
    });

    expect(value).toBe('greetings=hello%20world&year=1980&username=soyjavi&machines=macbook%20pro%2Cmacbook');
  });
});
