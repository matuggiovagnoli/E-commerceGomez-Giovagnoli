import  { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../../utils/firebase';
import { collection, doc, getDocs, getDoc } from "firebase/firestore"





const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const {ItemId} = useParams();
    

    useEffect (() => {
        const getDataDoc = async() => {
            const queryDoc = doc(db, 'Productos', ItemId);

            const responseDoc = await getDoc(queryDoc);

            const dataDoc = responseDoc.data();

            const nuevoDocumento = {id: responseDoc.id, ...dataDoc};

            setProducto(nuevoDocumento)

        }
        getDataDoc()

    },[])



  return (
    <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer