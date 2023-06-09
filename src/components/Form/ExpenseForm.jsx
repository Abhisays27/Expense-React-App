import React from 'react'
import './form.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);

    };

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);


    };
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {

            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props. onSaveExpenseData( expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
       

    }
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__control">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="1" step="1" onChange={amountChangeHandler} value={enteredAmount} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;
