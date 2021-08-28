// Sample.ts squareのテストコード
import { square, sum } from '../../utils/function';

describe('function/index.ts Functions TestCases', () => {
  test('should return the squared value', () => {
    const result = square(2);
    const expected = 4;
    expect(result).toStrictEqual(expected);
  });

  test('should return the sumed value', () => {
    const result = sum(2, 4);
    const expected = 6;
    expect(result).toStrictEqual(expected);
  });
});
