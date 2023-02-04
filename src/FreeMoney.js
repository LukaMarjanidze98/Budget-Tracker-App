import React from "react";
import { Card, CardHeader, Typography, CardContent } from "@mui/material";

export default function FreeMoney(props) {
  return (
    <>
      <Card size="sm" sx={{ backgroundColor: "paper" }}>
        <CardHeader title="Remaining Funds" />

        <CardContent>
          <Typography variant="h6" sx={{ color: "green" }}>
            {props.freemoneyleft}$
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
