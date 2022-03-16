import React from 'react';
import Item from '../Item/Item';


const ItemList = ( {lista} ) => {

  return (
    <div>
       {lista.map( (item)=> <Item nombre={item.nombre} talla={item.talla} color={item.color} marca={item.marca} tipo={item.tipo} img={item.img} />)}
    </div>
    
  )
}

export default ItemList