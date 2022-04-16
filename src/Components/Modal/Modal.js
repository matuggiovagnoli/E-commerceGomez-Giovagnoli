import React from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({id, producto, cantidad}) {
    let navigate = useNavigate();
    console.log("contidad", cantidad)
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Producto Agregado!!</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <img className='d-inline w-25' alt='Imagen miniatura' src={producto.img}/>
                <h4 className='d-inline mx-2'>{producto.nombre}</h4>
                <p className='d-inline mx-2'>Cantidad: {cantidad}</p>
                <p className='d-inline mx-2'>precio: ${cantidad*producto.precio}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => navigate('/')}>Seguir de Compras..!</button>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => navigate('/Cart')}>Ir al Carrito</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal