import isValidABN from './index';

describe('isValidABN', () => {
  it('returns false for no input', () => {
    const result = isValidABN();

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidABN('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidABN('12345678901');

    expect(result).toBe(false);
  });

  it('returns true for valid input', () => {
    const result = isValidABN('83914571673');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidABN('83 914 571 673');

    expect(result).toBe(true);
  });
});
