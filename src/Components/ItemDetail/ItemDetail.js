import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, descripcion, talla, color, marca, categoria, img, stock}) => {



  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <img src={img} className="img-thumbnail" alt='imagen descriptiva'/>
            </div>
        
            <div className='col'>
                <h2>{nombre}</h2>
                <h4>Descripcion</h4>
                <p>{descripcion}</p>
                <p>categoria: {categoria}</p>
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail