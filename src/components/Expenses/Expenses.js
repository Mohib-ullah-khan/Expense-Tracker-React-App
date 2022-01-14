import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
