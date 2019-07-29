const setToValue = (obj, value, path) => {
  let i;
  path = path.split('.');
  for (i = 0; i < path.length - 1; i += 1) obj = obj[path[i]];
  obj[path[i]] = value;
};

const getValue = (obj, path) => {
  let i;
  path = path.split('.');
  for (i = 0; i < path.length - 1; i += 1) obj = obj[path[i]];
  return obj[path[i]];
};

export default class Loan {
  constructor() {
    this.value = {
      createdAt: '2018-05-23T20:49:25.524Z',
      application: {
        productType: 'Solar',
        applicant: {
          annualIncome: 1
        },
        coApplicants: [{}]
      },
      creditDecision: {
        type: 'Single',
        attributes: {
          secondaryModeledIncome: 1,
          modeledIncome: 1,
          primaryModeledIncome: 1,
          chosenFICOScore: 600
        }
      }
    };
  }

  toString() {
    return this.value;
  }

  setFico(score) {
    this.value.creditDecision.attributes.chosenFICOScore = score;
  }

  setProductType(type) {
    this.value.application.productType = type;
  }

  setDecisionType(type) {
    this.value.creditDecision.type = type;
  }

  setModeledIncome(income) {
    this.value.creditDecision.attributes.secondaryModeledIncome = income;
    this.value.creditDecision.attributes.modeledIncome = income;
    this.value.creditDecision.attributes.primaryModeledIncome = income;
  }

  setStatedIncome(income) {
    this.value.application.applicant.annualIncome = income;
    this.value.application.coApplicants[0].annualIncome = income;
  }

  set(updateObj) {
    if (typeof updateObj !== 'object') return this;
    Object.keys(updateObj).forEach(key => {
      setToValue(this.value, updateObj[key], key);
    });
  }

  get(fields) {
    if (!Array.isArray(fields)) return getValue(this.value, fields);
    return fields.map(field => getValue(this.value, field));
  }
}

module.exports.Loan = Loan;
