import React, {Component} from "react";
import {Expense} from "../models/Expense";
import {ExpenseComponent} from "./ExpenseComponent";
import {ExpensesApiService} from "../ExpensesApiService";
import {User} from "../models/User";

export class ExpensesList extends Component {

    constructor(props : any) {
        super(props);
    }

    

    state = {
        expenses : this.getSampleExpenses()
    };

    backFromApiService(expenses : Expense[], total : number) {
        console.log(total)
    }

    componentDidMount() {
        ExpensesApiService.prototype.getExpenses(25, 0, this.backFromApiService)
    }

    render() {
        return (
            <div>
                {this.state.expenses.map(expense => <ExpenseComponent key={expense.id}/>)}
            </div>
        );
    }

    getSampleExpenses()
    {
        return [
            {
                id : 0,
                    amount : {value : 3.00, currency : "CAD"},
                date: new Date(),
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
            },
            {
                id : 1,
                amount : {value : 3.00, currency : "CAD"},
                date: new Date(),
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
            },
            {
                id: 2,
                amount: {value: 3.00, currency: "CAD"},
                date: new Date(),
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
            }
        ]
    }
}
