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
    <div className='position-relative'>
      { onOff &&
        <button type="button" className="btn position-relative" style={{background: "#ffe4b5"}}>
        <BsCart3 className='m-1' color="blcak" fontSize="25px"/> 
        <span className="position-absolute top-50 start-0 translate-middle badge rounded-pill bg-danger">{carritoContex.getContadorDeItemsCarrito()}</span>
      </button>
      }
    </div>
          )
};

export default CartWidget