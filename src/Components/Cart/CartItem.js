import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartItem = ({imagen, nombre, cantidad, precio}) => {
    const carritoContex = useContext(CartContext)
  return (
    <div>
        <img className="w-50" src={imagen} alt="Imagen del producto"/>
        <p>Producto: {nombre}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${precio}</p>

    </div>
  )
}

export default CartItem