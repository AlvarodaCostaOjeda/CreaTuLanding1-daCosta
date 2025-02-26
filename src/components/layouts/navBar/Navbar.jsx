import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">
        <Link className="logo" to="/">
          Mi tienda
        </Link>
      </h2>
      <ul className="categorias">
        <Link className="cat" to="/category/deportivas">
          Deportivas
        </Link>
        <Link className="cat" to="/category/urbanas">
          Urbanas
        </Link>
      </ul>

      <CartWidget />
    </div>
  );
};
