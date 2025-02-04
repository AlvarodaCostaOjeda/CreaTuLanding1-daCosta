import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navBar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Mi tienda</h2>
      <ul className="categorias">
        <li>Categoria 1</li>
        <li>Categoria 2</li>
        <li>Categoria 3</li>
      </ul>
      <CartWidget />
    </div>
  );
};
