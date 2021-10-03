import React, { useState } from "react";
import ExpenseLayout from "./components/Expenses/ExpenseLayout";
// import ExpenseForm from "./components/NewExpense/ExpenseForm";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const App = (props) => {
   const [expenses, setExpenses] = useState([
      {
         id: "e1",
         title: "Toilet Paper",
         amount: 94.12,
         date: new Date(2020, 7, 14),
      },
      { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
      {
         id: "e3",
         title: "Car Insurance",
         amount: 294.67,
         date: new Date(2021, 2, 28),
      },
      {
         id: "e4",
         title: "New Desk (Wooden)",
         amount: 450,
         date: new Date(2021, 5, 12),
      },
   ])

   // const onAddExpense = (expenseData) => {
   //    expenses.push(expenseData);
   //    console.log('this is from app', expenses)
   // }

   const expensesChangeHandler = (expensesData) => {
      console.log([...expenses, expensesData], 'this is from app');
      setExpenses([...expenses, expensesData]);
      // setExpenses(expenses.push(expensesData));
   }

   //   return React.createElement(
   //     "div",
   //     {},
   //     React.createElement("h2", {}, "Lets get started"),
   //     React.createElement(ExpenseLayout, {expenseObject: expenses})
   //   );

   return (
      <div>
         <NewExpense onAddExpense={expensesChangeHandler} />
         <ExpenseLayout expenseObject={expenses} />
      </div>
   );
}

export default App;
