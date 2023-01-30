import React, { useRef, useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });
  let titleRef = useRef();
  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    // setUserInput({ ...userInput, title: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
    // setTitle((prev) => {
    //   return prev*=2;
    // });
  };
  const priceChangeHandler = (event) => {
    // setPrice(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
    console.log(userInput);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(titleRef);
    const data = {
      title: userInput.title,
      price: userInput.price,
      date: new Date(userInput.date),
    };
    props.expenseData(data);
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            placeholder="Title"
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
            // ref={titleRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            placeholder="Price"
            type="number"
            min="0"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.closeForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
