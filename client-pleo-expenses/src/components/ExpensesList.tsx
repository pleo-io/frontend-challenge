import React, {Component} from "react";
import {Expense} from "../models/Expense";
import {ExpenseComponent} from "./ExpenseComponent";

export class ExpensesList extends Component {

    state = {
        expenses : this.getSampleExpenses()
    };

    backFromApiService(expenses : Expense[], total : number) {
        console.log(total)
    }

    componentDidMount() {
        //ExpensesApiService.prototype.getExpenses(25, 0, this.backFromApiService)
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-3 px-3">
                    {this.state.expenses.map(expense => <ExpenseComponent key={expense.id} expense={expense}/>)}
                </div>

            </React.Fragment>
        );
    }

    getSampleExpenses() : Expense[]
    {
        return [
            new Expense({
                id : '0',
                    amount : {value : 3.00, currency : "CAD"},
                date: new Date().toISOString(),
                    merchant: "Merchant",
                receipts: [],
                comment: "This is a nice comment",
                category: "cat. 42",
                user: {
                first: "Sophie",
                    last: "Lamontagne",
                    email: "sl@pleo.com"
                },
                index: 0
            }),
            new Expense({
                id : '1',
                amount : {value : 3.00, currency : "CAD"},
                date: new Date().toISOString(),
                merchant: "Merchant",
                receipts: [],
                comment: "This is a nice comment",
                category: "cat. 42",
                user: {
                    first: "Marc",
                    last: "Lamontagne",
                    email: "ml@pleo.com"
                },
                index: 1
            }),
            new Expense({
                id: '2',
                amount: {value: 3.00, currency: "CAD"},
                date: new Date().toISOString(),
                merchant: "Merchant",
                receipts: [],
                comment: "This is a nice comment",
                category: "cat. 42",
                user: {
                    first: "Henry",
                    last: "Lamontagne",
                    email: "hl@pleo.com"
                },
                index: 2
            })
        ]
    }
}
