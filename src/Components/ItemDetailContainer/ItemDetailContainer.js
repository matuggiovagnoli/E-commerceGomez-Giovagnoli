import  { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../../utils/firebase';
import { doc, getDoc } from "firebase/firestore"
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';





const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const [colores,setColores] = useState ([])
    const [imagenes,setImagenes] = useState ({})
    const [stockProducto, setStockProducto] = useState()
    const {ItemId} = useParams();
    

    useEffect (() => {
        const getDataDoc = async() => {
            const queryDoc = doc(db, 'Productos', ItemId);

            const responseDoc = await getDoc(queryDoc);

            const dataDoc = responseDoc.data();

            const nuevoDocumento = {id: responseDoc.id, ...dataDoc};
            // console.log("item detail prod", nuevoDocumento)

            setProducto(nuevoDocumento)
            setColores(nuevoDocumento.color)
            setImagenes(nuevoDocumento.imagenes)
            setStockProducto(nuevoDocumento.stock)
            console.log("imagenes",nuevoDocumento.imagenes)

        }
        getDataDoc()

    },[])

    
    // const color = "suela"
    // console.log( "keys de prod" ,Object.entries(producto).flat())

    // const arrayColores = Object.entries(producto).flat().map(e => {
    //   if (e.includes(color)){
    //      console.log(e)
    //   }else {
    //     console.log(e)
    //   }

    // })

    // console.log(arrayColores)




    // const imgentries = (producto, color) => {
    //   const arrayProducto = Object.entries(producto).flat()
    //   const array = []
    //   console.log("arrayProducto", arrayProducto.length)
    //   for (let index = 1; index < arrayProducto.length; index++) {
    //     return console.log(index)
    //     // if (index.includes(color)){
    //     //   console.log("suela")
    //     // }
        
        
    //   }
    // }
    // imgentries(producto, color)

    

  return (
    <ItemDetail producto={producto} colores={colores} imagenes={imagenes} stock={stockProducto}/>
  )
}

export default ItemDetailContainer