import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (index) => {},
});

export default CartContext;
