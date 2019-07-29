const loansFromDynamo = () => {};
const writeToS3 = () => {};

export const loansToCsv = async () => {
  const loans = loansFromDynamo();

  const csv = loans.map(loan => {
    return {
      creditType: loan.creditDecision.type,
      clientId: loan.clientId
    };
  });

  // some code to turn csv into a string

  writeToS3('location', csv);
};

// -------------------------------------------------
const renderLoan = loan => {
  return {
    creditType: loan.creditDecision.type,
    clientId: loan.clientId
  };
};

export const loansToCsvV2 = async () => {
  try {
    const loans = loansFromDynamo();

    const csv = loans.map(loan => renderLoan(loan));

    // some code to turn csv into a string

    writeToS3('location', csv);
  } catch (err) {
    console.log(err);
  }
};

// -------------------------------------------------
export const loansToCsvV3 = async context => {
  try {
    const loans = context.loansService.loansFromDynamo();

    const csv = loans.map(loan => renderLoan(loan));

    // some code to turn csv into a string

    context.s3Service.writeToS3('location', csv);
  } catch (err) {
    console.log(err);
  }
};
