import { addAandB } from '../index';
import Loan from '../__mocks__/loan';

const loan = new Loan();
// this represents a dev/test doing all the hard work to set up a loan for testing...
loan.set({
  a: 2,
  b: 3
});

describe('Ayyyyyyyy', () => {
  // it('Not doing anything', () => {});
  it('Should add two things', () => {
    expect(addAandB(loan)).toBe(5);
  });
});
