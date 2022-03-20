import  { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'




const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})

    useEffect (() => {
        const getItem = new Promise ((resolve,reject) => {
            setTimeout (() => {
                resolve (
                    {id:"01" ,nombre:"MIZA ",descripcion:"Sandalia de cuero texturado, con aplique de tachas metálicas laterales y pulsera regulable con hebilla. Altura: 6cm - Còmodas y chancheras, ideales para todos los días" ,talla:"38", color:"Negro", marca:"VIAMO",categoria:"Sandalia",img:"./imagenes/1.jpg", stock:"4"}
                )
            })
        }, 2000)
        getItem.then(resultado => setProducto(resultado))
    }, [])



  return (
    <ItemDetail {...producto}/>
  )
}

export default ItemDetailContainer