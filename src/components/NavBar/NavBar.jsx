import { Link } from "react-router-dom";
import ItemDetailContainer from "../ItemListContainer/ItemDetailContainer.jsx";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="Nav-Bar">
      <Link to="/" className="logo">
        <h1>The Bolter</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/nosotros">
            Nosotros
          </Link>
        </li>
      </ul>
      <ItemDetailContainer />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
