import React from 'react';
import {Link} from "react-router-dom"


function Item({nombre,talla,color,marca,categoria,img,id,precio}) {
  return (
  
    <div className="card p-0" style={{width: '18rem', margin: '12px', display: "inline"}}>
      <img src={img} className="card-img-top " alt={nombre}/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{categoria}.</p>
        <p className="card-text">${precio}.</p>
        <Link to={`/detalle/${id}`}>Mas Detalles</Link>
      </div>
    </div>
  
  )
}

export default Item