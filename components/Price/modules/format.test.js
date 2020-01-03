import format from './format';

const amount = 10.95;
const currency = 'Eur';

describe('format()', () => {
  it('default', () => {
    const value = format();
    expect(value).toEqual('0');
  });

  it('including value', () => {
    const value = format({ value: amount });
    expect(value).toEqual('10,95');
  });

  it('including currency', () => {
    const value = format({ value: amount, currency });
    expect(value).toEqual('Eur10,95');
  });

  it('including fixed(4)', () => {
    const value = format({ value: amount, fixed: 4 });
    expect(value).toEqual('10,9500');
  });

  it('including symbol (left)', () => {
    const value = format({ value: amount, symbol: '$' });
    expect(value).toEqual('$10,95');
  });

  it('including symbol (right)', () => {
    const value = format({ value: amount, symbol: '€' });
    expect(value).toEqual('10,95€');
  });

  it('including symbol over currency', () => {
    const value = format({ value: amount, currency, symbol: '€' });
    expect(value).toEqual('10,95€');
  });
});
