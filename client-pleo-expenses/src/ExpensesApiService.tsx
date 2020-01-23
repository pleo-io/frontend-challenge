import {Expense} from './models/Expense'
import * as fs from "fs";

/**
 * Since this is a small project, we'll use callbacks instead of Promises.
 * Promises make the code look good, but they're a bit tricky to implement for such a small project.
 */
export class ExpensesApiService
{
    getExpenses(limit : number, offset : number, callback : (expenses : Array<Expense>, total : number) => any)
    {
        let uri = `http://localhost:3000/expenses?limit=${limit}&offset=${offset}`;
        let options = {
            json : true
        };
        let httpCallback = (error : any, response : any, body : any) => {
            let expenses = body.expenses.map((expense : Expense) => new Expense(expense));
            callback(expenses, body.total)
        };
        request.get(uri, options, httpCallback);
    }

    updateExpenseComment(expenseId : string, comment : string, callback : (comment : Expense) => any)
    {
        let uri = `http://localhost:3000/expenses/${expenseId}`;
        let options = {
            body : {comment},
            json : true
        };
        let httpCallback = (error : any, response : any, body : any) => {
            callback(new Expense(body))
        };
        request.post(uri, options, httpCallback);
    }

    uploadReceiptForExpense(expenseId : string, receiptImagePath : string, callback : (expense : Expense) => any)
    {
        //inspired from https://github.com/request/request/tree/master/examples
        let uri = `http://localhost:3000/expenses/${expenseId}/receipts`;
        let options = {
            // all meta data should be included here for proper signing
            qs: {
                title: 'This receipt is awesome',
                description: 'Sent on ' + new Date(),
                is_public: 1
            },
            // again the same meta data + the actual photo
            formData: {
                title: 'This receipt is awesome',
                description: 'Sent on ' + new Date(),
                is_public: 1,
                receipt:fs.createReadStream(receiptImagePath)
            },
            json : true
        };
        let httpCallback = (error : any, response : any, body : any) => {
            callback(new Expense(body))
        };
        request.post(uri, options, httpCallback)
    }
}