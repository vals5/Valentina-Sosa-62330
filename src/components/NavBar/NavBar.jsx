import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3 style={{color: 'orange'}}>THE BOLTER</h3>

        <button style={{cursor:'pointer'}}>Tienda</button>
        <button style={{cursor:'pointer'}}>Perfil</button>
        <button style={{cursor:'pointer'}}>Carrito</button>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
