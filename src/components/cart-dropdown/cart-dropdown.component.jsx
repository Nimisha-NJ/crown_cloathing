import React from "react";
import CartItem from "../cart-item/cart-item";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    {[].map((item) => (
      <CartItem cartItem={item} />
    ))}
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
