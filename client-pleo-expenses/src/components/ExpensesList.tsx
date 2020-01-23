import React, {Component} from "react";
import {Expense} from "../models/Expense";
import {ExpenseComponent} from "./ExpenseComponent";

export class ExpensesList extends Component<IPropTypes, IState> {
    render() {
        return (
            <React.Fragment>
                <div className="py-3">
                    {this.props.expenses.map(expense => <ExpenseComponent key={expense.id} expense={expense}/>)}
                </div>
            </React.Fragment>
        );
    }
}

interface IState{

}

interface IPropTypes{
    expenses : Expense[]
}


