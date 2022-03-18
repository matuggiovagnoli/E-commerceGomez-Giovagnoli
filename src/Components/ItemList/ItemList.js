import React from 'react';
import Item from '../Item/Item';


const ItemList = ( {lista} ) => {

  return (
    <div className='container'>
      <h2>PRODUCTOS</h2>

      <hr/>

      <div className='row'>
       {lista.map( (item)=> <Item nombre={item.nombre} talla={item.talla} color={item.color} marca={item.marca} tipo={item.tipo} img={item.img} />)}
      </div>
    </div>
    
  )
}

export default ItemList