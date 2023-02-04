import React, { useContext } from "react";
import styled from "styled-components";
import Budget from "./Budget";
import Expenses from "./Expenses";
import FreeMoney from "./FreeMoney";
import ExpensesContainer from "./ExpensesContainer";
import { MyContext } from "./Context";
import Grid from "@mui/material/Grid";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function BudgetTrackerApp() {
  const { BudgetAmount, ExpenseAmount } = useContext(MyContext);

  const FreemoneyAmount = BudgetAmount - ExpenseAmount;
  return (
    <>
      <Title>Budget Tracker App</Title>

      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "70%", display: "flex", margin: "0 auto" }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Budget />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Expenses expenseAmount={ExpenseAmount} />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <FreeMoney freemoneyleft={FreemoneyAmount} />
        </Grid>
      </Grid>

      <ExpensesContainer />
    </>
  );
}

export default BudgetTrackerApp;
