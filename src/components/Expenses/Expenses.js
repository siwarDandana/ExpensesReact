import { useState } from "react";
import ChartData from "../ExpensesChart/ChartData";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [filter, setFilter] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };
  const filtredExpenses = expenses.filter((el) => {
    return el.date.getFullYear().toString() === filter;
  });
  let expensesContent = (
    <h2 style={{ color: "white", textAlign: "center" }}>
      No Expenses Found !!!
    </h2>
  );
  if (filtredExpenses.length > 0) {
    expensesContent = filtredExpenses.map((expense) => {
      return (
        <ExpenseItem
          date={expense.date}
          price={expense.price}
          title={expense.title}
        />
      );
    });
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        filterValue={filter}
        onFilterChangeHandler={filterChangeHandler}
      />
      <ChartData />
      {expensesContent}
      {/* {filtredExpenses.length === 0 ? (
          <p>No Expenses Found !!!</p>
        ) : (
          filtredExpenses.map((expense) => {
            return (
              <ExpenseItem
                date={expense.date}
                price={expense.price}
                title={expense.title}
              />
            );
          })
        )} */}
      {/* {filtredExpenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            price={expense.price}
            title={expense.title}
          />
        );
      })} */}
    </Card>
  );
}

export default Expenses;
