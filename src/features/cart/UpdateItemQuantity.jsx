import React from "react";
import { useDispatch } from "react-redux";

import { increaseItemQty, decreaseItemQty } from "./cartSlice";
import Button from "./../../ui/Button";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQty(pizzaId));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQty(pizzaId));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={"round"} onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type={"round"} onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
