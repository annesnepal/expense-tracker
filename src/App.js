import React, { useState } from "react";
import NewExpense from "./component/NewExpense/NewExpense";
import Expenses from "./component/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    date: new Date("2022-12-05"),
    title: "School Fee",
    amount: 300,
  },
  {
    id: "e2",
    date: new Date("2022-12-02"),
    title: "Books",
    amount: 250,
  },
  {
    id: "e3",
    date: new Date("2022-11-05"),
    title: "House Rent",
    amount: 700,
  },
  {
    id: "e4",
    date: new Date("2022-10-05"),
    title: "Food",
    amount: 500,
  },
  {
    id: "e5",
    date: new Date("2022-12-01"),
    title: "Travel",
    amount: 120,
  },
];
const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpense([expense, ...expenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
