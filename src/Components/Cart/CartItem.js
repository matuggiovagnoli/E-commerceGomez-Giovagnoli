import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartItem = ({imagen, nombre, cantidad, precio, id}) => {
    const carritoContex = useContext(CartContext)
    

  return (
    <div className='container w-50' >
        <div className='row border m-2' style={{backgroundColor: "lightblue"}}>
          <div className='col'>
            <img className="w-75" src={imagen} alt="Imagen del producto"/>
          </div>
          <div className='col'>
            <p>Producto: {nombre}</p>
          </div>
          <div className='col'>
            <p>Cantidad: {cantidad}</p>
          </div>
          <div className='col'>
            <p>Precio: ${precio}</p>
          </div>
          <div className='col'>
            <p>Precio Total: ${precio * cantidad}</p>
          </div>
          <div className='col'>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => {carritoContex.removeItem(id)}}></button>          
          </div>
        </div>
    </div>
  )
}

export default CartItem