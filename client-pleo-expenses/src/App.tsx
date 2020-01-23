// @ts-ignore
import React from 'react';
import './App.css';
import {ExpensesList} from "./components/ExpensesList";
import {ExpensesFilter, NavBar} from './components/NavBar';
import {Expense} from "./models/Expense";

const App: React.FC = () => {
  return (
    <div className="App">
        <NavBar onFilterChanged={onFilterChanged}/>
        <ExpensesList expenses={sampleExpenses}/>
    </div>
  );
};

const onFilterChanged = (filter : ExpensesFilter) =>
{
    console.log(`Filter changed for ${filter}!`);
};

const sampleExpenses : any = [
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
    ];

export default App;
