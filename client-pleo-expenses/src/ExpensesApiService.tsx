import {Expense} from './models/Expense'
import axios from 'axios';
import * as path from "path";

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
        const config = {
            headers: {'content-type': 'multipart/form-data'}
        };
        let data = {
            title: 'This receipt is awesome',
            description: 'Sent on ' + new Date(),
            is_public: 1,
            json: true,
            receipt: receiptImagePath
        };

        await axios.post(uri, data, config)
            .then(res => expense = new Expense(res))
            .catch((err: any) =>
            {
                console.log("something went wrong... " + err)
            });
        return expense;
    }
}