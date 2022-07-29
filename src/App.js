import { useState, Fragment } from 'react';
import './App.css';
import BackwardCounter from './Components/Counter/BackwardCounter';
import UpwardCounter from './Components/Counter/UpwardCounter';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };
  return (
    <Fragment>
      <BackwardCounter />
      <UpwardCounter />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Fragment>
  );
}

export default App;
