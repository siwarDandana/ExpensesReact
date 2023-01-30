import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const getExpenseData = (data) => {
    props.appData(data);
  };
  const [isShown, setIsShown] = useState(false);
  const isShownChangeHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="new-expense">
      {isShown ? (
        <NewExpenseForm
          expenseData={getExpenseData}
          closeForm={isShownChangeHandler}
        />
      ) : (
        <button onClick={isShownChangeHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
