import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { BsTrash } from "react-icons/bs";
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import db from '../../utils/firebase';
import ModalCart from '../Modal/ModalCart';

const CartItem = ({imagen, nombre, cantidad, precio, id, categoria}) => {
    const carritoContext = useContext(CartContext)

const enviarPedido = async(event) => {
  // prevenir el refresh del onSubmit
  event.preventDefault();
  
  //guardo variables refiriendo a su posicion en target
  const nombre = event.target[0].value;
  const telefono = event.target[1].value;
  const email = event.target[2].value;
  //Creando el nuevo objeto con la infp del comprador, producto/s y el monto total
  const nuevoObjeto = {
    comprador:{
      nombre,
      telefono,
      email
    },
    producto: carritoContext.productosCarrito,
    total: carritoContext.totalidadDePago(),
    date: Timestamp.fromDate(new Date())
  }
  // Creamos referencia a Base de datos
  const pedidosCollection = collection(db,"pedidos");
  // Crear nuevo documento de pedidos y guardamos la refenrencia que retorna la promesa
  const referenciaPedido = await addDoc(pedidosCollection,nuevoObjeto)
}
    

  return (
    <div className='container w-50 ' >
      <h1>FAUSTINA</h1>
        <div className='row border m-2 shadow p-3 mb-5 bg-body rounded' style={{backgroundColor: "#f5f5f5"}}>
          <div className='col'>
            <img className="w-100 h-100" src={imagen} alt="Imagen del producto"/>
          </div>
          <div className='col justify-content-md-center pt-3'>
            <p>{categoria}</p>
            <hr/>
            <p>{nombre}</p>
          </div>
          <div className='col justify-content-md-center pt-3'>
            <p>Cantidad:</p>
            <hr/> 
            <p>{cantidad}</p>
          </div>
          <div className='col justify-content-md-center pt-3'>
            <p>Precio Unitario:</p>
            <hr/>
            <p>${precio}</p>
          </div>
          <div className='col justify-content-md-center pt-3'>
            <p>Precio Total:</p> 
            <hr/>
            <p>${precio * cantidad}</p>
          </div>
          <div className='col justify-content-md-center pt-4 '>
            <button className='btn btn-outline-danger' onClick={() => {carritoContext.removeItem(id)}}>
            <BsTrash/>
            </button>          
          </div>
        </div>
        <form className='position-absolute top-50 end-0 translate-middle-y w-25' onSubmit={enviarPedido}>
          <h2 className='bg-secondary rounded-pill d-md-inline-flex p-2 '>RESUMEN DE COMPRA</h2>
          <h4 className=''>Total a Pagar $ {carritoContext.totalidadDePago()}</h4>
          <hr/>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre</span>
            <input type="text" className="form-control form-control-sm" placeholder="Nombre Completo" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <br/>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Telefono</span>
            <input type="text" className="form-control form-control-sm" placeholder="Ejemplo +54 351-3545698" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <br/>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="email" className="form-control form-control-sm" placeholder="aaa@gmail.com" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <br/>
          <button className='btn btn-success' type='submit' data-bs-toggle="modal" data-bs-target={`#id1`}>Realizar Pedido</button>
        </form>
        <ModalCart id={`id1`}/>
    </div>
  )
}

export default CartItem