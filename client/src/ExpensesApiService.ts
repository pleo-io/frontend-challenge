import * as request from 'request';
import {Expense} from './models/Expense'

export class ExpensesApiService
{
    getExpenses(limit : number, offset : number, callback : (expenses : Array<Expense>, total : number) => any)
    {
        let uri = `http://localhost:3000/expenses?limit=${limit}&offset=${offset}`;
        let options = {
            json : true
        };
        let httpCallback = (error : any, response : any, body : any) => {
            let expenses = body.expenses.map(expense => new Expense(expense))
            callback(expenses, body.total)
        };
        request.get(uri, options, httpCallback);
    }

    updateExpenseComment(expenseId : string, comment : string)
    {}

    uploadReceiptForExpense(expenseId : string, receipt : any)
    {}
}