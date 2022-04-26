import React from 'react'
import { useNavigate } from 'react-router-dom'

function ModalCart({id, idPedido}) {
    let navigate = useNavigate();
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header justify-content-center">
                <img className='img-thumbnail w-25' src='https://c.tenor.com/0EflySmYSuAAAAAC/check-mark-button-joypixels.gif' alt='Todo Listo' />
            </div>
            <div className="modal-body">
                <h3>Excelente, tu pedido fue realizado!</h3>
                <p>Tu codigo de pedido es: {idPedido}</p>
            </div>
            <div className="modal-footer justify-content-center">
                <button className="btn btn-primary btn-lg" data-bs-dismiss="modal" onClick={() => navigate('/Inicio')}>Volver a Inicio</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ModalCart