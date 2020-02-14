import firstDateOfWeek from './firstDateOfWeek';

describe('firstDateOfWeek()', () => {
  it('default', () => {
    let date = firstDateOfWeek();
    expect(date.getFullYear()).toBe(1980);
    expect(date.getMonth()).toBe(3);
    expect(date.getDate()).toBe(7);
  });

  it('passing a week/year', () => {
    let date = firstDateOfWeek(1, 2018);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(1);

    date = firstDateOfWeek(1, 2019);
    expect(date.getFullYear()).toBe(2018);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(31);

    date = firstDateOfWeek(1, 2020);
    expect(date.getFullYear()).toBe(2019);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(30);
  });
});
