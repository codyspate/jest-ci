export const addTwoThings = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('This is for numbers you big stupid idiot!');
  return a + b;
};

export const addTwoThingsFromALoan = (loan, firstKey, secondKey) => {
  return addTwoThings(loan.get(firstKey), loan.get(secondKey));
};

export const addAandB = loan => {
  return addTwoThingsFromALoan(loan, 'a', 'b');
};
