import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { BsTrash } from "react-icons/bs";

const CartItem = ({imagen, nombre, cantidad, precio, id}) => {
    const carritoContex = useContext(CartContext)
    

  return (
    <div className='container w-50' >
        <div className='row border m-2' style={{backgroundColor: "#f5f5f5"}}>
          <div className='col  px-0'>
            <img className="w-75" src={imagen} alt="Imagen del producto"/>
          </div>
          <div className='col justify-content-md-center pt-4'>
            <p>Modelo: <br/>{nombre}</p>
          </div>
          <div className='col justify-content-md-center pt-4'>
            <p>Cantidad: <br/> {cantidad}</p>
          </div>
          <div className='col justify-content-md-center pt-4'>
            <p>Precio: <br/>${precio}</p>
          </div>
          <div className='col justify-content-md-center pt-4'>
            <p>Precio Total: <br/>${precio * cantidad}</p>
          </div>
          <div className='col justify-content-md-center pt-4 '>
            <button className='btn btn-outline-danger' onClick={() => {carritoContex.removeItem(id)}}>
            <BsTrash/>
            </button>          
          </div>
        </div>
    </div>
  )
}

export default CartItem