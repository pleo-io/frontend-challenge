import {Expense} from './models/Expense'
import * as fs from "fs";
import axios from 'axios';

/**
 * Since this is a small project, we'll use callbacks instead of Promises.
 * Promises make the code look good, but they're a bit tricky to implement for such a small project.
 */
export class ExpensesApiService
{
    async getExpenses(limit: number, offset: number): Promise<any>
    {
        let expenses: Expense[] = [];
        let total = 0;
        let uri = `http://localhost:3000/expenses?limit=${limit}&offset=${offset}`;
        await axios.get(uri)
            .then((res: any) =>
            {
                expenses = res.data.expenses.map((expense: Expense) => new Expense(expense));
                total = res.data.total;
            })
            .catch((err: any) =>
            {
                console.log("something went wrong... " + err)
            });
        return {expenses: expenses, total: total}
    }

    async updateExpenseComment(expenseId: string, comment: string): Promise<any>
    {
        let uri = `http://localhost:3000/expenses/${expenseId}`;
        await axios.post(uri, {comment, json: true})
    }

    async uploadReceiptForExpense(expenseId: string, receiptImagePath: string): Promise<any>
    {
        //inspired from https://github.com/request/request/tree/master/examples
        let uri = `http://localhost:3000/expenses/${expenseId}/receipts`;
        let expense = {};
        await axios.post(uri, {
            title: 'This receipt is awesome',
            description: 'Sent on ' + new Date(),
            is_public: 1,
            json: true,
            receipt: fs.createReadStream(receiptImagePath)
        })
            .then(res => expense = new Expense(res))
            .catch((err: any) =>
            {
                console.log("something went wrong... " + err)
            });
        return expense;
    }
}