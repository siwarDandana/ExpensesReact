import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const oldExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 451,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(oldExpenses);
  const getAppData = (newData) => {
    setExpenses((prevState) => {
      // we forget to add the ... (spread operator)
      return [newData, ...prevState];
    });
    console.log(`our data is: ${newData}`);
  };
  return (
    <div>
      <NewExpense appData={getAppData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
