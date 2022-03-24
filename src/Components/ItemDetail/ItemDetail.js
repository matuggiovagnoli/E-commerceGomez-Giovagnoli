import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({id,nombre,descripcion,talla,color,marca,categoria,img1,img2,img3,img4,stock}) => {

  const [contador,setContador] = useState(1)

  return (
    <div className='container'>
        <div className='row justify-content-start '>
            <div className='col'>
              <img src={img1} className='w-50 p-1' alt={nombre}/>
              <img src={img2} className='w-50 p-1' alt={nombre} />
              <img src={img3} className='w-50 p-1' alt={nombre} />
              <img src={img4} className='w-50 p-1' alt={nombre} />
            </div>
        
            <div className='col'>
                <h2>{nombre}</h2>
                
                <hr/>
                <h4>Descripcion</h4>
                <p>{descripcion}</p>
                <hr/>
                <h5>Talle: {talla}</h5>
                <h5>Marca: {marca}</h5>
                <h5>Color: {color}</h5>
                <h5>categoria: {categoria}</h5>
                <ItemCount max={stock} contador={contador} setContador={setContador}/>
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail