import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import Modal from '../Modal/Modal'



const ItemDetail = ({producto,colores,imagenes, stock, imagenesColor, setImagenesColor}) => {

  const carritoContext = useContext(CartContext);
  const [productosagruegados, setProductosAgregados] = useState(0);
  const [stockActual, setStockActual] = useState(0);
  const [boton, setBoton] = useState("");
  
  const changeColor = (imagenes, boton) => {
    const { imgnectar, imgnegro, imgoliva, imgsuela, imgtrufa, imgchocolate, imghueso, imgoro, imgplata, imgvision, imgazul, imgverde, imgblanco, imgmulticolor, imgbeige, imgpeltre } = imagenes;

    switch (boton) {
      case "Suela":
        setImagenesColor(imgsuela);
        break;
      case "Nectar":
        setImagenesColor(imgnectar);
        break;
      case "Negro":
        setImagenesColor(imgnegro);
        break;
      case "Oliva":
        setImagenesColor(imgoliva);
        break;
      case "Hueso":
        setImagenesColor(imghueso);
        break;
      case "Trufa":
        setImagenesColor(imgtrufa);
        break;
      case "Chocolate":
        setImagenesColor(imgchocolate);
        break;
      case "Oro":
        setImagenesColor(imgoro);
        break;
      case "Plata":
        setImagenesColor(imgplata);
        break;
      case "Vision":
        setImagenesColor(imgvision);
        break;
      case "Azul":
        setImagenesColor(imgazul);
        break;
      case "Verde":
        setImagenesColor(imgverde);
        break;
      case "Blanco":
        setImagenesColor(imgblanco);
        break;
      case "Multicolor":
        setImagenesColor(imgmulticolor);
        break;
      case "Beige":
        setImagenesColor(imgbeige);
        break;
      case "Peltre":
        setImagenesColor(imgpeltre);
        break;
      default:
        console.log("algo anda mal con el switch");
        break;
    }
  };


  useEffect(() => {
    changeColor(imagenes, boton);
  }, [boton]);

  const onAdd = (quantityToAdd) => {
    setProductosAgregados(quantityToAdd);
    setStockActual (stockActual-quantityToAdd)
    carritoContext.addItem(producto,quantityToAdd)
  }
  
  return (
    <div className='container'>
        <div className='row justify-content-start '>
            <div className='col'>
              {
                imagenesColor.map((img) => (
                  <img src={img} className='w-50 p-1' />
                ))
              }
            </div>
        
            <div className='col'>
                <h2>{producto.nombre}</h2>
                <hr/>
                <div className='p-2 rounded-3 ' style={{background : "#deb887"}}>
                  <h4><strong>Descripcion</strong></h4>
                  <p>{producto.descripcion}</p>
                </div>
                <hr/>
                <h5>Marca: {producto.marca}</h5>
                <h5>Categoria: {producto.categoria}</h5>
                <h5>Talle: {producto.talla}</h5>
                <h5>Colores disponibles</h5>
                { 
                  colores.map(color => (
                    <div className='d-inline p-2' key={color}>
                      <button className='btn btn-outline-dark' onClick={()=> setBoton(`${color}`)}>{color}</button>
                    </div>
                  ))
                }
                <h4>Stock disponible: {producto.stock}</h4>
                <ItemCount max={producto.stock} onAdd={onAdd} initial={1} ProductosAgregados={productosagruegados} producto={producto} id={producto.id}/>
                {/* {
                  
                  // AGREGAR MODAL PARA ESTO
                  productosagruegados > 0 &&
                
                  // <div className='container'>
                  //   <hr/>
                  //   <div className='row '>
                  //     <div className='col ms-5'>
                  //       <Link to="/" className="btn btn-secondary">Seguir Comprando</Link>
                  //     </div>
                  //     <div className='col'>
                  //       <Link to="/Cart" className="btn btn-danger">Finalizar mis Compras</Link>
                  //     </div>
                  //   </div>
                  // </div>

                } */}
                
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail