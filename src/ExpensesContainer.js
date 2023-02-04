import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import Button from "@mui/material/Button";
import ExpenseItem from "./ExpenseItem";
import { v4 as uuidv4 } from "uuid";
import { MyContext } from "./Context";
const Wrapper = styled.section`
  max-width: 70%;
  margin: 0 auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: tomato;
`;

export default function ExpensesContainer() {
  const nameRef = useRef();
  const costRef = useRef();

  const { setExpenseAmount, sumExpenses } = useContext(MyContext);
  const { expensesObjectArr, setExpensesObjectArr } = useContext(MyContext);
  const addExpense = () => {
    if (nameRef.current.value.length && costRef.current.value.length) {
      setExpensesObjectArr([
        ...expensesObjectArr,
        {
          id: uuidv4(),
          name: nameRef.current.value,
          cost: costRef.current.value,
        },
      ]);
      nameRef.current.value = "";
      costRef.current.value = "";
    }
  };
  useEffect(() => {
    setExpenseAmount(sumExpenses);
  }, [expensesObjectArr]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addExpense();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
  const removeExpense = (id) => {
    const updatedArr = expensesObjectArr.filter((item) => item.id !== id);
    setExpensesObjectArr(updatedArr);
  };

  return (
    <>
      <Title>Expenses</Title>
      <Wrapper>
        <FormControlUnstyled>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            inputRef={nameRef}
          />
          <TextField
            id="outlined-short"
            label="Cost"
            variant="outlined"
            inputRef={costRef}
          />
          <Button variant="outlined" onClick={addExpense}>
            Add Expense
          </Button>
        </FormControlUnstyled>

        {expensesObjectArr.map((item) => (
          <ExpenseItem
            key={item.id}
            name={item.name}
            remove={() => removeExpense(item.id)}
            cost={item.cost}
          />
        ))}
      </Wrapper>
    </>
  );
}
