import React, { useState } from 'react';
import "./ExpenseLayout.css";
// import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseLayout = (props) => {

   const [filteredYear, setExpensesFilterYear] = useState('2021')

   const yearFilterHandler = year => {
      setExpensesFilterYear(year)
   }

   const filteredExpenses = props.expenseObject.filter(obj => obj.date.getFullYear().toString() === filteredYear)

   return (
      <div>
         <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onSelectYear={yearFilterHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
         </Card>
      </div>
   );
};

export default ExpenseLayout;
