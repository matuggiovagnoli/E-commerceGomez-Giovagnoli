import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({saludo}) => {

  const [listaProductos, setListaProductos] = useState([])

  useEffect (()=>{
    const promesa = new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve ([
        {id:"01" ,nombre:"MIZA ",descripcion:"Sandalia de cuero texturado, con aplique de tachas metálicas laterales y pulsera regulable con hebilla. Altura: 6cm - Còmodas y chancheras, ideales para todos los días" ,talla:"38", color:"Negro", marca:"VIAMO",categoria:"Sandalia",img:"./imagenes/1.jpg", stock:"4"},
        {id:"02" ,nombre:"BELMA", talla:"38", color:"HUESO", marca:"VIAMO",categoria:"Zapato",img:"./imagenes/2.jpg" ,descripcion:"Zapato estilo zueco de cuero soft, con detalle de gradado sobre tiras cruzadas. Altura: 2,5cm - Clásicos que no pasan de moda" ,stock:"2"},
        {id:"03" ,nombre:"FAUSTI ", talla:"38", color:"TRUFA", marca:"VIAMO",categoria:"Borcegos",img:"./imagenes/3.jpg" ,descripcion:"Borcego de cuero graneado con detalle de alpinos metálicos y cierre interior para un mejor calce. Altura: 3 cm - ¡Los vas a amar, pensados para andar todo el invierno!" ,stock:"6"}
        ])
      }, 2000);
    })
    promesa.then(resultado => setListaProductos(resultado))
  },[])


 
  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList lista={ listaProductos }/>
    </div>
  )
}



export default ItemListContainer