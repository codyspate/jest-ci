export const someOtherDevChangesTheLoan = loan => {
  loan.set({
    a: 1,
    b: 1
  });
};

export const setToValue = (obj, value, path) => {
  let i;
  path = path.split('.');
  for (i = 0; i < path.length - 1; i += 1) obj = obj[path[i]];
  obj[path[i]] = value;
};

export const getValue = (obj, path) => {
  let i;
  path = path.split('.');
  for (i = 0; i < path.length - 1; i += 1) obj = obj[path[i]];
  return obj[path[i]];
};
