import React from 'react';
import {BsCart3} from 'react-icons/bs'
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';



const CartWidget = () => {
  const carritoContex = useContext(CartContext)

  return (
    <button type="button" className="btn btn-primary">
      <BsCart3 color="blcak" fontSize="25px"/> 
        <span className="badge bg-secondary m-2">{carritoContex.getContadorDeItemsCarrito()}</span>
    </button>
   
  )
};

export default CartWidget