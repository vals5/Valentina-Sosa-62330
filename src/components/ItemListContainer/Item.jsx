import React from "react";
import {Link} from 'react-router-dom';

const Item = ({producto}) =>{
    return (
        <div className="Producto">
        <img src={producto.img} alt = {producto.nombre} />
        <h2>{producto.nombre}</h2>
        <p>${producto.price}</p>
        <Link className="Ver-Mas" to = {`/item`}>Ver más</Link>
    </div>
    )
};

export default Item;