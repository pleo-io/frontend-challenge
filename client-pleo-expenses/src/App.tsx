// @ts-ignore
import React from 'react';
import './App.css';
import {ExpensesList} from "./components/ExpensesList";
import {NavBar} from './components/NavBar';
import {ExpensesFilter} from "./components/utils/utils";
import {Expense} from "./models/Expense";
import * as _ from 'lodash'

export default class App extends React.Component<IPropTypes, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            expenses: this.sampleExpenses,
            filter: this.getDefaultFilter()
        };
    }

    render() {
        return (
            <React.Fragment>
                <NavBar onFilterChanged={this.onFilterChanged} filter={this.state.filter}/>
                <main className="container">
                    <ExpensesList expenses={this.getSortedExpenses({...this.state.expenses}, this.state.filter)}/>
                </main>
            </React.Fragment>
        );
    };

    onFilterChanged = (filter: ExpensesFilter) => {
        console.log(`Filter changed for ${filter}!`);
        this.setState((prevState) => {
            let copyState = {...prevState};
            copyState.filter = filter;
            return copyState
        })
    };

    private getSortedExpenses(exps : Expense[], filter : ExpensesFilter) : Expense[]
    {
        return _.sortBy(exps, (e : Expense) => {
            let ret;
            switch (filter) {
                case ExpensesFilter.Last:
                    ret = e.user.last;
                    break;
                case ExpensesFilter.id:
                    ret = e.id;
                    break;
                case ExpensesFilter.First:
                    ret = e.user.first;
                    break;
                case ExpensesFilter.Date:
                    ret = e.date;
                    break;
                case ExpensesFilter.Amount:
                    ret = e.amount.value;
                    break;
                case ExpensesFilter.Currency:
                    ret = e.amount.currency;
                    break;
            }
            return ret;
        });
    }

    sampleExpenses: any = [
        new Expense({
            id: '0',
            amount: {value: 2.00, currency: "CAD"},
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
            id: '1',
            amount: {value: 42.00, currency: "CAD"},
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
            amount: {value: 24.00, currency: "CAD"},
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
    ];

    private getDefaultFilter() {
        return ExpensesFilter.id;
    }
}

interface IState {
    expenses : Expense[],
    filter : ExpensesFilter
}

interface IPropTypes {

}