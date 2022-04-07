import React from 'react'
import {useContext} from'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../Cart/CartItem'




function Cart() {
  const carritoContext = useContext(CartContext)
  const productosCarrito = carritoContext.productosCarrito;
  console.log(productosCarrito)
  

  return (
    <div>
      { productosCarrito.length > 0 ? (
      <div>
        {
          productosCarrito.map(Item => (
            <CartItem key={Item.producto.id} categoria={Item.producto.categoria} imagen={Item.producto.img} nombre={Item.producto.nombre} cantidad={Item.cantidad} precio={Item.producto.precio} id={Item.producto.id}/>
          ))
        }
          <button className='position-absolute top-100 start-50 translate-middle' onClick={carritoContext.clear}>Vaciar Carrito</button>
      </div>)
      :
      (<div>
        <h2>No hay Productos en tu carrito...</h2>
        <Link to="/" className="btn btn-primary">Regresar a Inicio</Link>
      </div>)
      }
    </div>
  )
}

export default Cart