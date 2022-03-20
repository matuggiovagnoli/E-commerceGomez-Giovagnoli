import React from 'react'


function Item({nombre,talla,color,marca,categoria,img}) {
  return (
  
    <div className="card" style={{width: '18rem', margin: '12px', display: "inline"}}>
      <img src={img} className="card-img-top" alt={nombre}/>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{categoria}.</p>
        <button type="button" className="btn btn-outline-primary">Mas Detalles</button>
      </div>
    </div>
  
  )
}

export default Item