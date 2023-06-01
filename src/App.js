import "./App.css";

import Expenses from "./components/Expenses";

function App() {
  let expenses = [
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
  return (
    <>
     <Expenses item={expenses}/>
    </>
  );
}

export default App;
