import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { BsTrash } from "react-icons/bs";
import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore';
import db from '../../utils/firebase';
import ModalCart from '../Modal/ModalCart';

const CartItem = ({imagen, nombre, cantidad, precio, id, categoria, talle}) => {
    const carritoContext = useContext(CartContext)
    const [idPedido, setIdPedido] = useState()

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

  const getPedido = await getDocs(pedidosCollection)

  const dataPedido = getPedido.docs.map(doc => {return{id: doc.id, ...doc.data()}})

  setIdPedido(referenciaPedido.id)
  
    console.log('datapedido', dataPedido)
    console.log('idPedido', idPedido)

}


    

  return (
    <div className='container w-75 h-50 d-inline-block' style={{background: "#f5f5dc"}} >
        <div className='row border m-2 shadow p-3 mb-5 bg-body rounded' style={{backgroundColor: "#f5f5dc"}}>
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
            <p>Talle:</p>
            <hr/>
            <p>N:{talle}</p>
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
        <form className='position-absolute top-50 end-0 translate-middle-y w-25 h-75 p-3 needs-validation' onSubmit={enviarPedido} noValidate>
          <h2 className='bg-secondary rounded-pill d-md-inline-flex p-2 '>RESUMEN DE COMPRA</h2>
          <h4 className=''>Total a Pagar $ {carritoContext.totalidadDePago()}</h4>
          <hr/>
          <div className="input-group has-validation mb-3">
            <span className="input-group-text" id="inputGroupPrepend">Nombre</span>
            <input type="text" className="form-control form-control-sm" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" id='validationCustomUsername' required/>
            <div className="invalid-feedback">
              Porfavor ingresar Nombre.
            </div>
          </div>
          <br/>
          <div className="input-group has-validation mb-3">
            <span className="input-group-text" id="inputGroupPrepend">Telefono</span>
            <input type="text" className="form-control form-control-sm" placeholder="Ejemplo +54 351-3545698" aria-label="Username" aria-describedby="basic-addon1" id='validationCustomUsername' required/>
          </div>
          <br/>
          <div className="input-group has-validation mb-3">
            <span className="input-group-text" id="inputGroupPrepend">Email</span>
            <input type="email" className="form-control form-control-sm" placeholder="aaa@gmail.com" aria-label="Username" aria-describedby="basic-addon1 " id='validationCustomUsername' required/>
          </div>
          <br/>
          <button className='btn btn-success' type='submit' data-bs-toggle="modal" data-bs-target={`#id1`}>Realizar Pedido</button>
        </form>
        <ModalCart id={`id1`} idPedido={idPedido}/>
    </div>
  )
}

export default CartItem