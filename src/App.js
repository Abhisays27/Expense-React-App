import "./App.css";
import { useState , useEffect}  from "react";

import Expenses from "./components/Expenses";
import NewExpenses from "./components/Form/NewExpenses";
let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "school Fee",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 200,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e3",
    title: "Food",
    amount: 330,
    date: new Date(2021, 5, 9),
  },
  {
    id: "e4",
    title: "House Rent",
    amount: 550,
    date: new Date(2021, 6, 23),
  },
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSE);
  //To avoid infite loop problem

// useEffect(() => {
//    // fetch('http server').then(
//   //   response =>{
//   //   return response.json();
//   //   }
    
//   //   )
//   //   .then(
//   //   data =>{
//   //   setExpenses(data)
//   //   }
//   //   );
// }, []);

 

 

  const addExpenseHandler = (expense)=>{
    const updatedExpense = [expense,...expenses];
    setExpenses(updatedExpense);

  }
  return (
    <>
    <NewExpenses onAddExpense={addExpenseHandler}/>
     <Expenses item={expenses}/>
    </>
  );
}

export default App;
