import React, { useContext } from "react";
import "./navigation.styles.scss";

// ROUTE
import { Outlet, Link } from "react-router-dom";

// Context
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

// Firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

// COMPONENTS
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/CartIcon.component";
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            LOJA
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SAIR
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              ENTRAR
            </Link>
          )}

          <Link className="nav-link" to="/shop">
            <CartIcon />
          </Link>
        </div>

        {isCartOpen && <CartDropdown />}
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
