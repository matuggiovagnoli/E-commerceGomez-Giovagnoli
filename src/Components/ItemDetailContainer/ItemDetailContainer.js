import  { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../../utils/firebase';
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const [colores,setColores] = useState ([])
    const [imagenes,setImagenes] = useState ({})
    const [stockProducto, setStockProducto] = useState()
    const [imagenesColor, setImagenesColor] = useState([]);
    const {ItemId} = useParams();
    

    useEffect (() => {
        const getDataDoc = async() => {
            const queryDoc = doc(db, 'Productos', ItemId);

            const responseDoc = await getDoc(queryDoc);

            const dataDoc = responseDoc.data();

            const nuevoDocumento = {id: responseDoc.id, ...dataDoc};
            // console.log("item detail prod", nuevoDocumento)

            setProducto(nuevoDocumento);
            setColores(nuevoDocumento.color);
            setImagenes(nuevoDocumento.imagenes);
            setStockProducto(nuevoDocumento.stock);
            setImagenesColor([
              Object.values(nuevoDocumento.imagenes).flat()[0],
              Object.values(nuevoDocumento.imagenes).flat()[1],
              Object.values(nuevoDocumento.imagenes).flat()[2],
              Object.values(nuevoDocumento.imagenes).flat()[3],
            ]);

        }
        getDataDoc()

    },[])

    

  return (
    <div style={{background: "#f5f5dc"}}>
      <ItemDetail 
      producto={producto} 
      colores={colores} 
      imagenes={imagenes} 
      stock={stockProducto}
      imagenesColor={imagenesColor}
      setImagenesColor={setImagenesColor}
      />
    </div>
  )
}

export default ItemDetailContainer