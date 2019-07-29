import { addTwoThingsFromALoan } from '../index';
import Loan from '../__mocks__/loan';

const loan = new Loan();
// this represents a dev/test doing all the hard work to set up a loan for testing...
loan.set({
  a: 2,
  b: 3
});

describe('Beeeeeee', () => {
  // it('Not doing anything', () => {});
  it('Should add two things', () => {
    expect(addTwoThingsFromALoan(loan, 'a', 'b')).toBe(5);
  });
});
