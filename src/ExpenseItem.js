import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ExpenseItem(props) {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={props.remove} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <ShoppingCartIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={`Cost: ${props.cost}`} />
      </ListItem>
      <Divider />
    </>
  );
}
