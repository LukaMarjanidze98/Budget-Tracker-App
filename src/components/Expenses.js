import React from "react";
import { Card, CardHeader, Typography, CardContent } from "@mui/material";

export default function Expenses(props) {
  return (
    <>
      <Card size="sm" xs={4} sm={4} md={4} sx={{ backgroundColor: "paper" }}>
        <CardHeader title="Expenses" />

        <CardContent>
          <Typography variant="h6" sx={{ color: "green" }}>
            {props.expenseAmount}$
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "7px", marginBottom: "5px" }}
          >
            This is all your Expenses
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
