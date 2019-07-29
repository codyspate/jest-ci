import { addTwoThings } from '../index';

describe('Seeeeeeee', () => {
  // it('Not doing anything', () => {});
  it('Should add two things', () => {
    expect(addTwoThings(2, 3)).toBe(5);
  });
  it('Should throw', () => {
    expect(() => {
      addTwoThings('fish', 3);
    }).toThrow();
  });
});
