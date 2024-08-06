import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { PedirProductos } from "./PedirProductos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    PedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
