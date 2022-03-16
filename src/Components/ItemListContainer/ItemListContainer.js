import React, {useState} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({saludo}) => {
 
  
const [listaProductos,setListaProductos] = useState ([
  {nombre:"ZAPATOS 1220.317", talla:"38", color:"Negro y Blanco", marca:"Vizzano", tipo:"Zapato Taco Medio",img:"./imagenes/1.jpg"},
  {nombre:"ZAPATOS 1365.115", talla:"38", color:"Beige 435", marca:"Vizzano", tipo:"Zapato taco medio",img:"./imagenes/2.jpg"},
  {nombre:"ZAPATOS 1395.101", talla:"38", color:"Rojo", marca:"Vizzano", tipo:"Zapato taco alto",img:"./imagenes/3.jpg"},
  {nombre:"ZAPATOS 1395.102", talla:"38", color:"Negro", marca:"Vizzano", tipo:"Zapato taco alto",img:"./imagenes/4.jpg"},
  {nombre:"BOTAS 3079.106", talla:"38", color:"Blanco y Negro", marca:"Vizzano", tipo:"Bota taco medio",img:"../imagenes/5.jpg"},
  {nombre:"BOTAS 3089.102", talla:"38", color:"Camel", marca:"Vizzano", tipo:"Bota taco alto",img:"./imagenes/6.jpg"}
])
  


  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList lista={listaProductos}/>
    </div>
  )
}



export default ItemListContainer