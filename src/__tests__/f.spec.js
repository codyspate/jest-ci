describe('Jest Examples', () => {
  it('Not doing anything', () => {});
  it('Validates 1', () => {
    expect(1).toBe(1);
  });
  it('Validates 0', () => {
    expect(0).toBe(0);
  });
  it('Invalidates 1', () => {
    expect(1).not.toBe(0);
  });
  it('Counts function calls', () => {
    // https://jestjs.io/docs/en/mock-functions
    const func = jest.fn(); // notice the mock function usage
    func();
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });
  it('validates snapshots', () => {
    const obj = {
      foo: 'bar'
    };
    expect(obj).toMatchSnapshot();
  });
});
