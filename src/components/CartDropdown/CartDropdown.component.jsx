import "./cart-dropdown.styles.scss";

//COMPONENTS
import Button from "../Button/Button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Finalizar Compra</Button>
    </div>
  );
};

export default CartDropdown;
