import './amount';
import './user';

class Expense
{
    id : string;
    amount : Amount;
    date: string;
    merchant: string;
    receipts: any[];
    comment: string;
    category: string;
    user: User;
    index: number;

    // this constructor is not mandatory in this context, but if at any time one of API or Model changes,
    // then we just have to change the mapping instead of refactoring all files referring to this.
    constructor(expenseResponse : any) {
        expenseResponse.let(it => {
            this.id = it.id;
            this.amount = new Amount(it.amount);
            this.date = it.date;
            this.merchant = it.date;
            this.receipts = it.receipts;
            this.comment = it.comment;
            this.category = it.category;
            this.user = new User(it.user);
            this.index = it.index;
        });


    }
}
