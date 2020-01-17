import * as request from 'request';

export class ExpensesApiService
{
    getExpenses(limit : number, offset : number)
    {
        let uri = `http://localhost:3000/expenses?limit=${limit}&offset=${offset}`;
        let options = {
            json : true
        };
        let callback = (error : any, response : any, body : any) => {
            console.log(body)
        };
        request.get(uri, options, callback)
    }

    updateExpenseComment(expenseId : string, comment : string)
    {}

    uploadReceiptForExpense(expenseId : string, receipt : any)
    {}
}