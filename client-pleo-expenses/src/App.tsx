// @ts-ignore
import React from 'react';
import './App.css';
import {ExpensesList} from "./components/ExpensesList";

const App: React.FC = () => {
  return (
    <div className="App">
        <ExpensesList/>
    </div>
  );
};

export default App;
