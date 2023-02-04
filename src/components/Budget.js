import React, { useState, useRef, useContext, useEffect } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MyContext } from "../Context.js";

export default function Budget() {
  const { BudgetAmount, setBudgetAmount } = useContext(MyContext);
  const ref = useRef(BudgetAmount);
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);
  const handleEdit = () => {
    setBudgetAmount(ref.current.value);
    toggleEditMode();
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && editMode) {
      handleEdit();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
  return (
    <>
      <Card size="sm" xs={4} sm={4} md={4} sx={{ backgroundColor: "paper" }}>
        <CardHeader title="Budget" />

        <CardContent>
          {editMode ? (
            <TextField
              id="outlined-short"
              label="Enter your budget $"
              defaultValue={BudgetAmount}
              variant="outlined"
              inputRef={ref}
            />
          ) : (
            <Typography variant="h6" sx={{ color: "green" }}>
              {BudgetAmount || 0}$
            </Typography>
          )}
          <Typography
            variant="body1"
            sx={{ marginTop: "7px", marginBottom: "5px" }}
          >
            This is all your funds
          </Typography>
        </CardContent>
        <CardActions>
          {editMode ? (
            <Button onClick={handleEdit} variant="contained">
              Submit
            </Button>
          ) : (
            <Button
              onClick={toggleEditMode}
              endIcon={<EditIcon />}
              variant="contained"
            >
              Edit
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
