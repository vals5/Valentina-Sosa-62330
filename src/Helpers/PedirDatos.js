import Data from "../Data/productos.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(Data);
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = Data.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}