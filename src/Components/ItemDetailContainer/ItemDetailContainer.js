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
            console.log("stockProducto",stockProducto)

        }
        getDataDoc()

    },[])



  return (
    <ItemDetail producto={producto} colores={colores} imagenes={imagenes} stock={stockProducto}/>
  )
}

export default ItemDetailContainer