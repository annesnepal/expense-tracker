import React from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
