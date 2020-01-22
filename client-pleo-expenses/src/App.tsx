// @ts-ignore
import React from 'react';
import './App.css';
import {ExpensesList} from "./components/ExpensesList";
import Navbar from "react-bootstrap/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
        <Navbar className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Pleo Expenses</span>
        </Navbar>
        <ExpensesList/>
    </div>
  );
};

export default App;
