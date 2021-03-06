/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');

describe('Determines age based on birthday', () => {
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(Date.now())).toBe(0);
  });
});

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });
});

describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2019').valueOf());
  });

  test('Returns 1 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(1);
  });
});


describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('18 Mar 2019').valueOf());
  });

  test('Returns 22 if birthday is today', () => {
    expect(birthday.howOld(new Date('18 Mar 1997'))).toBe(22);
  });
});
