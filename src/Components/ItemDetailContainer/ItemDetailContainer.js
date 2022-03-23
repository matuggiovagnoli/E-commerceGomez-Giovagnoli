import  { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const {ItemId} = useParams();
    console.log(ItemId)

    useEffect (() => {
        const getItem = new Promise ((resolve,reject) => {
            setTimeout (() => {
                resolve ([
                    {id:"01" ,nombre:"MIZA ", talla:"38", color:"Negro", marca:"VIAMO",categoria:"Sandalias",img:"./imagenes/1.jpg", stock:"4", descripcion:"Sandalia de cuero texturado, con aplique de tachas metálicas laterales y pulsera regulable con hebilla. Altura: 6cm - Còmodas y chancheras, ideales para todos los días"},
                    {id:"02" ,nombre:"BELMA", talla:"38", color:"HUESO", marca:"VIAMO",categoria:"Zapatos",img:"./imagenes/2.jpg" ,descripcion:"Zapato estilo zueco de cuero soft, con detalle de gradado sobre tiras cruzadas. Altura: 2,5cm - Clásicos que no pasan de moda" ,stock:"2"},
                    {id:"03" ,nombre:"FAUSTI ", talla:"38", color:"TRUFA", marca:"VIAMO",categoria:"Borcegos",img:"./imagenes/3.jpg" ,descripcion:"Borcego de cuero graneado con detalle de alpinos metálicos y cierre interior para un mejor calce. Altura: 3 cm - ¡Los vas a amar, pensados para andar todo el invierno!" ,stock:"6"}
                    ])
            })
        }, 2000)
        getItem.then((resultado) => {
            setProducto(resultado.find((prod) => prod.id == ItemId))
        })
    }, [])



  return (
    <ItemDetail {...producto}/>
  )
}

export default ItemDetailContainer