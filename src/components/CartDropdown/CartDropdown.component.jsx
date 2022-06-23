import { useContext } from "react";
import "./cart-dropdown.styles.scss";

//COMPONENTS
import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-item.component";

// CONTEXTS
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Finalizar Compra</Button>
    </div>
  );
};

export default CartDropdown;
