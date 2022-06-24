import React, { useContext } from "react";

// COMPONENTS
import Button from "../Button/Button.component";

// CONTEXTS
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext),
    addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default ProductCard;