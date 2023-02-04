import React, { useState } from "react";

export const MyContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [BudgetAmount, setBudgetAmount] = useState(1500);
  const [ExpenseAmount, setExpenseAmount] = useState(0);
  const [expensesObjectArr, setExpensesObjectArr] = useState([
    { id: 1, name: "new laptop", cost: 700 },
    { id: 2, name: "birthday gift", cost: 200 },
    { id: 3, name: "new home decor items", cost: 340 },
  ]);

  const sumExpenses = (data, property) => {
    property = "cost";
    data = expensesObjectArr;
    return data.reduce((acc, obj) => {
      acc += parseFloat(obj[property]) || 0;
      return acc;
    }, 0);
  };

  return (
    <MyContext.Provider
      value={{
        BudgetAmount,
        setBudgetAmount,
        ExpenseAmount,
        setExpenseAmount,
        sumExpenses,
        expensesObjectArr,
        setExpensesObjectArr,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default DataProvider;
