import React, { useState } from 'react';
import "./ExpenseLayout.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "./../UI/Card";

const ExpenseLayout = (props) => {
   const [expensesFilterYear, setExpensesFilterYear] = useState('2021')

   const yearFilterHandler = selectedYear => {  
      setExpensesFilterYear(selectedYear)
      console.log(expensesFilterYear, 'this is expense filter')
   }

  return (
    <div>
      <h2>{expensesFilterYear}</h2>
      <Card className="expenses">
      <ExpensesFilter selectedYear={expensesFilterYear} onSelectYear={yearFilterHandler}/>
        {props.expenseObject.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default ExpenseLayout;
