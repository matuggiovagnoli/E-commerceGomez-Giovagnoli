import React, { useEffect, useState } from 'react';
import {BsCart3} from 'react-icons/bs'
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';



const CartWidget = () => {
  const carritoContex = useContext(CartContext)
  const [onOff, setOnOff] = useState(false)
  console.log("onOff", onOff)
  console.log("getContadorDeItemsCarrito", carritoContex.getContadorDeItemsCarrito())

  useEffect(() =>{
    const getUse = () => {
      if (carritoContex.getContadorDeItemsCarrito() > 0){
        setOnOff(true)
      }else{
        setOnOff(false)
      }
    }; getUse()
  }, [carritoContex.getContadorDeItemsCarrito()])
  
  
  

  return (
    <div>
      { onOff &&
        <button type="button" className="btn btn-primary">
        <BsCart3 color="blcak" fontSize="25px"/> 
        <span className="badge bg-secondary m-2">{carritoContex.getContadorDeItemsCarrito()}</span>
      </button>
      }
    </div>
          )
};

export default CartWidget