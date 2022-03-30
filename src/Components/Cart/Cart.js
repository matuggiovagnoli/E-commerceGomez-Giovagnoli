import React from 'react'
import {useContext} from'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../Cart/CartItem'




function Cart() {
  const carritoContext = useContext(CartContext)
  const productosCarrito = carritoContext.productosCarrito;
  console.log(productosCarrito)
  

  return (
    <div>
      <h1>Cart Container</h1>
      {
        productosCarrito.map(Item => (
          <CartItem key={Item.producto.id} imagen={Item.producto.img1} nombre={Item.producto.nombre} cantidad={Item.cantidad} precio={Item.producto.precio}/>
        ))
      }
    </div>
  )
}

export default Cart