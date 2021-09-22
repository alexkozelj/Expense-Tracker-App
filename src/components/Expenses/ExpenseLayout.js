import "./ExpenseLayout.css"
import ExpenseItem from "./ExpenseItem.js"
import Card from "./../UI/Card"

const ExpenseLayout = (props) => {


   return (
      <Card className="expenses">
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
   )
}

export default ExpenseLayout;