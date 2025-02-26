import "./cartWidget.css";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
  return (
    <div className="cartWidget">
      <Link className="linkCarrito" to="/cart">
        <h3>Carrito </h3>
        <FaShoppingCart className="cartIcon" />
      </Link>
    </div>
  );
};
