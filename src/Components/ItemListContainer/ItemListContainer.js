import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({saludo}) => {

  const [listaProductos, setListaProductos] = useState([]);
  const {categoryId} = useParams();
  console.log(categoryId);

  useEffect (()=>{
    const promesa = new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve ([
        {id:"01" ,nombre:"MIZA ", talla:"38", color:"NEGRO", marca:"VIAMO",categoria:"Sandalias",img:"https://i.ibb.co/bzJzPgB/miza-negro-1.webp", stock:"4", descripcion:"Sandalia de cuero texturado, con aplique de tachas metálicas laterales y pulsera regulable con hebilla. Altura: 6cm - Còmodas y chancheras, ideales para todos los días"},
        {id:"02" ,nombre:"ALBITA", talla:"38", color:"SUELA", marca:"VIAMO",categoria:"Zapatos",img:"https://i.ibb.co/hWxcVmm/Albita-suela-1.webp" ,descripcion:"Zapato de cuero graneado con detalle de alpinos metálicos, cordones y costuras a tono. Altura: 4 cm - ¡No hay nada más canchero!" ,stock:"2"},
        {id:"03" ,nombre:"FAUSTI ", talla:"38", color:"TRUFA", marca:"VIAMO",categoria:"Borcegos",img:"https://i.ibb.co/yhLDK8t/VC07322-CV168.webp" ,descripcion:"Borcego de cuero graneado con detalle de alpinos metálicos y cierre interior para un mejor calce. Altura: 3 cm - ¡Los vas a amar, pensados para andar todo el invierno!" ,stock:"6"}
        ])
      }, 2000);
    })
    promesa.then((resultado) => {
      if (!categoryId) {
        setListaProductos(resultado)
      }else {
        setListaProductos(resultado.filter((producto) => producto.categoria === categoryId))
      }
    })
  },[categoryId])



  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList lista={ listaProductos }/>
    </div>
  )
}



export default ItemListContainer