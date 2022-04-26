import React from 'react';
import {Link} from "react-router-dom"


function Item({nombre,img,id,precio}) {
  return (
  
    <div className="card p-0" style={{width: '18rem', margin: '12px', display: "inline"}}>
      <img src={img} className="card-img-top " alt={nombre}/>
      <div className="card-body position-relative">
        <h5 className="card-title position-absolute top-0 start-50 translate-middle-x">{nombre}</h5>
        <hr/>
        <h5 className="card-text ms-4">${precio}</h5>
        <Link className='btn ms-4' to={`/detalle/${id}`} style={{background:"#f5deb3"}}>Mas Detalles</Link>
      </div>
    </div>
  
  )
}

export default Item