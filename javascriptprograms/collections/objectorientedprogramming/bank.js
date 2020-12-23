// account create
// deposit
// withdrawal
// balance enquiry

class Bank {

    static bankName=()=>{
        console.log("sbk Bank")
    }
    accountCreate = (acno, name, minimum_balance) => {

        this.acno=acno;
        this.name=name;
        this.minimum_balance=minimum_balance;
      }
      
      deposit=(amount)=>{

        this.minimum_balance+=amount;
        console.log(" your account "+this.acno+" has been credited with amount "+amount+" avail bal "+this.minimum_balance)
      }

      withdraw=(amount)=>{
          if(this.minimum_balance>=amount){
              this.minimum_balance-amount;
              console.log("your account "+this.acno+" has been debited with amount "+amount+" avail bal "+this.minimum_balance)
          }
          else(
              console.log("insufficient balance")
          )
      }

      balanceEnq=()=>{
          console.log("avail balance="+this.minimum_balance)
      }

}

var obj=new Bank()
obj.accountCreate(100,"ajay",5000)
obj.deposit(5000)
obj.withdraw(20000)
Bank.bankName()