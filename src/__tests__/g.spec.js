import * as mockLoansService from './mock-loans-service';
import {loansToCsvV3} from '../utils.js';

const mockedLoan = () => {
    return { 
      clientId: 'hi',
      creditType:'Combined'
    }
}

describe('A loan to csv test', () => {
    it('will work happily', async () => {

        const mls = mockLoansService

        mls.add(mockedLoan())

        const context = { loanService: mls }

        const results = loansToCsvV3(context)

        // expect( results ).toBe(5)
    })
})
    
  