import React, { useState } from 'react';

import { IExpenseForm, IUserInput } from 'interfaces/components/NewExpense/NewExpenses';
import { TTargetValue } from 'interfaces/General';

const ExpenseForm = ({onSaveExpenseData,onCancel}: IExpenseForm) => {
    const [userInput, setUserInput] = useState<IUserInput>({
        title: "",
        amount: "",
        date: "",
    })

    const {title, amount, date} = userInput

    const changeHandler = (e: { target: { value: TTargetValue, name: string }; }) => {
        setUserInput((prevState: any) => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
        }
      });
    }

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSaveExpenseData({
      title: title,
      amount: +amount,//enforce a number conversion
      date: new Date(date),
    });
    setUserInput((prevState: any) => {
        return {
            ...prevState,
            title: "",
            amount: "",
            date: "",
        }
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor='enteredTitle'>Title</label>
          <input
            id="enteredTitle"
            name="title"
            type="text"
            value={title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredAmount">Amount</label>
          <input
            id="enteredAmount"
            name="amount"
            type="number"
            value={amount}
            min="0.01"
            max="999999.99"
            step="0.01"
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor='enteredDate'>Date</label>
          <input
            id="enteredDate"
            name="date"
            type="date"
            value={date}
            min="2019-01-01"
            max="2023-12-31"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel} type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;