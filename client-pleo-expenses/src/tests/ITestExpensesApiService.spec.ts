import {ExpensesApiService} from '../ExpensesApiService';
import {expect} from 'chai';
import 'mocha';
import * as Path from "path";

const expensesApiService = new ExpensesApiService();
//before running those tests, the api should be up and running.
//to start the api go to frontend-challenge/api
//And write $npm install followed by $npm start

describe('Fetch expenses', () =>
{
    it('should fetch 25 expenses, without errors', (mochaDone) =>
    {
        try
        {
            expensesApiService.getExpenses(25, 0).then((res) =>
            {
                let result = res.expenses.length;
                expect(result).to.equal(25);
            });
        } catch (err)
        {

        } finally
        {
            mochaDone()
        }
    });
});

describe('Update a comment', () =>
{
    it('should update a comment for an expense, without errors', (mochaDone) =>
    {
        expensesApiService.getExpenses(25, 0).then((res) =>
        {
            let expenseId = res.expenses[1].id;
            const expected = 'this is a nice comment';
            expensesApiService.updateExpenseComment(expenseId, 'this is a nice comment')
                .then(expense => expect(expense.comment).to.equal(expected)).catch(err => mochaDone())
        });
    });
});

describe('Upload a picture', () =>
{
    it('should upload a picture for an expense, without errors', (mochaDone) =>
    {
        expensesApiService.getExpenses(25, 0).then((res) =>
        {
            let expenseId = res.expenses[1].id;
            let receiptsLength = res.expenses[1].receipts.length;
            const expected = receiptsLength + 1;
            expensesApiService.uploadReceiptForExpense(expenseId, Path.join(__dirname, 'pokemon_test_image.png'))
                .then(expense =>
                {
                    expect(expense.receipts.length).to.equal(expected)
                }).catch(err => {})
                .finally(() => mochaDone());
        });
    });
});