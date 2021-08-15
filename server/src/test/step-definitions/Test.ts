import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';

@binding()
export class BankAccountSteps {
  private accountBalance: number = 0;

  @given(/A bank account with starting balance of (\d*)/)
  public givenAnAccountWithStartingBalance(amount: number) {
    this.accountBalance = amount;
  }

  @when(/(\d*) is deposited/)
  public deposit(amount: number) {
    this.accountBalance = Number(this.accountBalance) + Number(amount);
  }

  @then(/The bank account balance should be (\d*)/)
  public accountBalanceShouldEqual(expectedAmount: number) {
    
    const fetch = require('node-fetch');

    const port = process.env.PORT;
    console.log(port);
    //@ts-ignore
    const res = fetch("http://localhost:"+port).then((res) => {
      console.log(res);
      
    })

    console.log(res);
    
    
    assert.equal(this.accountBalance, expectedAmount);
  }
}