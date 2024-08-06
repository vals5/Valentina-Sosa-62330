import Data from "../Data/productos.json";

const PedirProductos = () => {
    return new Promise ((resolve, reject) => {
      resolve(Data)
    })
    }

    export default PedirProductos;