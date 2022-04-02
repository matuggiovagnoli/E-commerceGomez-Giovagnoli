import  { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';





const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const {ItemId} = useParams();
    

    useEffect (() => {
        const getItem = new Promise ((resolve,reject) => {
            setTimeout (() =>{
                resolve ([
                    {
                        id:"01" ,
                        nombre:"MIZA ",
                        precio: 11500,
                        talla:"38", 
                        color:"Negro", 
                        marca:"VIAMO",
                        categoria:"Sandalias",
                        img1:"https://i.ibb.co/bzJzPgB/miza-negro-1.webp",
                        img2:"https://i.ibb.co/8mWTbCJ/miza-negro-2.webp",
                        img3:"https://i.ibb.co/HCbmgcD/miza-negro-3.webp",
                        img4:"https://i.ibb.co/Nmz6z2H/miza-negro-4.webp",
                        stock:4 , 
                        descripcion:"Sandalia de cuero texturado, con aplique de tachas metálicas laterales y pulsera regulable con hebilla. Altura: 6cm - Còmodas y chancheras, ideales para todos los días"
                    },
                    {
                        id:"02" ,
                        nombre:"ALBITA", 
                        precio: 16000,
                        talla:"38", 
                        color:"HUESO", 
                        marca:"VIAMO",
                        categoria:"Zapatos",
                        img1:"https://i.ibb.co/hWxcVmm/Albita-suela-1.webp",
                        img2:"https://i.ibb.co/g7hCq1d/Albita-suela-2.webp",
                        img3:"https://i.ibb.co/tJx9Ztp/Albita-suela-3.webp",
                        img4:"https://i.ibb.co/jTVD6yJ/Albita-suela-4.webp" ,
                        stock:2 , 
                        descripcion:"Zapato estilo zueco de cuero soft, con detalle de gradado sobre tiras cruzadas. Altura: 2,5cm - Clásicos que no pasan de moda" 
                    },
                    {
                        id:"03" ,
                        nombre:"FAUSTI ",
                        precio: 19000,
                        talla:"38", 
                        color:"TRUFA", 
                        marca:"VIAMO",
                        categoria:"Borcegos",
                        img1:"https://i.ibb.co/yhLDK8t/VC07322-CV168.webp",
                        img2:"https://i.ibb.co/KK2w6XK/fausti-trufa-2.webp",
                        img3:"https://i.ibb.co/RYBKVLV/fausti-trufa-3.webp",
                        img4:"https://i.ibb.co/71knBXF/fausti-trufa-4.webp",
                        descripcion:"Borcego de cuero graneado con detalle de alpinos metálicos y cierre interior para un mejor calce. Altura: 3 cm - ¡Los vas a amar, pensados para andar todo el invierno!" ,
                        stock:6
                    }
                ])
            }, 2000)
        })
        getItem.then((resultado) => {
            setProducto(resultado.find((prod) => prod.id === ItemId))
        })
    },[])



  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer