import React from 'react';
import Item from '../Item/Item';


const ItemList = ( {lista} ) => {

  return (
    <div className='container'>
      <h2>PRODUCTOS</h2>

      <hr/>

      <div className='row'>
       {lista.map( (item)=> <Item key={item.id} nombre={item.nombre} categoria={item.categoria} color={item.color} marca={item.marca} tipo={item.tipo} img={item.img} id={item.id} />)}
      </div>
    </div>
    
  )
}

export default ItemList