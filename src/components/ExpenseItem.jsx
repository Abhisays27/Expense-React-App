import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  // const [newtitle, setNewTitle] = useState("")
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = ()=>{
  //   setTitle(newtitle);
  // }

  // const changeHandler = (event)=>{
  //   setNewTitle(event.target.value);
  // }


 
  
  return (
    <div className="expense-item">
      <ExpenseDate date={new Date(props.date)}/>
    
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type="text" value={newtitle} onChange={changeHandler}/>
      <button onClick={clickHandler}>Change Title</button> */}
    </div>
  );
};

export default ExpenseItem;
