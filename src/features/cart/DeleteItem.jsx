import React from "react";
import { useDispatch } from "react-redux";

import { deleteItem } from "./cartSlice";
import Button from "./../../ui/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <div>
      <Button type="small" onClick={handleDeleteItem}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
