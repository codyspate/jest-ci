import { addAandB } from '../index';
import { someOtherDevChangesTheLoan } from '../utils';
import Loan from '../__mocks__/loan';

// Pretend its a DB

const loan = new Loan();

loan.set({
  a: 2,
  b: 3
});

describe('Deeeeeee', () => {
  // it('Not doing anything', () => {});
  it('Should add two things', () => {
    someOtherDevChangesTheLoan(loan);
    expect(addAandB(loan)).toBe(5);
  });
});
