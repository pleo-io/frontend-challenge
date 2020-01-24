import {Amount} from './Amount';
import {User} from './User';

export class Expense
{
    id: string;
    amount: Amount;
    date: string;
    merchant: string;
    receipts: any[];
    comment: string;
    category: string;
    user: User;
    index: number;

    // this constructor is not mandatory in this context, but if at any time one of API or Model changes,
    // then we just have to change the mapping instead of refactoring all files referring to this.
    constructor(expenseResponse: any)
    {
        this.id = expenseResponse.id;
        this.amount = new Amount(expenseResponse.amount);
        this.date = expenseResponse.date;
        this.merchant = expenseResponse.date;
        this.receipts = expenseResponse.receipts;
        this.comment = expenseResponse.comment;
        this.category = expenseResponse.category;
        this.user = new User(expenseResponse.user);
        this.index = expenseResponse.index;
    }
}
