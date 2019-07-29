const mockDb = [];

export function clear() {
  mockDb.length = 0;
}

export function add(loan) {
  mockDb.push(loan);
}

export async function fetchLoan(loanid) {
    const ml = mockDb.filter(l => l.id === loanid);
  
    if (ml.length === 0) return null;
  
    return {
      ...ml[0],
    };
  }

export async function fetchLoan(loanid) {
    const ml = mockDb.filter(l => l.id === loanid);

    if (ml.length === 0) return null;

    return {
        ...ml[0],
    };
}

export async function loansFromDynamo() {
    return mockDb.map(l => {
        return {
        ...l
        };
    });
}
