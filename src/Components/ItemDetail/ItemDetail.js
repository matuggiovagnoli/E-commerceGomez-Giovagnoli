import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import Modal from '../Modal/Modal'



const ItemDetail = ({producto,colores,imagenes}) => {

  const carritoContext = useContext(CartContext)
  // console.log('carritoContex' , carritoContext)

  // console.log("imagenes", imagenes.imgnectar)
  // console.log("colores", colores)
  console.log("producto id", producto.id)
  
  
  
  
  
  const [productosagruegados, setProductosAgregados] = useState(0)
  const [stockProducto, setStockProducto] = useState(6)
  
  
  console.log("productosagruegados", productosagruegados)
  

  const onAdd = (quantityToAdd) => {
    setProductosAgregados(quantityToAdd);
    setStockProducto (stockProducto-quantityToAdd)
    carritoContext.addItem(producto,quantityToAdd)
  }
  
  return (
    <div className='container'>
        <div className='row justify-content-start '>
            <div className='col'>
              <img src={imagenes.imgnectar} className='w-50 p-1' alt={producto.nombre}/>
              <img src={imagenes.imgnectar} className='w-50 p-1' alt={producto.nombre} />
              <img src={imagenes.imgnectar} className='w-50 p-1' alt={producto.nombre} />
              <img src={imagenes.imgnectar} className='w-50 p-1' alt={producto.nombre} />
            </div>
        
            <div className='col'>
                <h2>{producto.nombre}</h2>
                <hr/>
                <div className='p-2 rounded-3 ' style={{background : "#dcdcdc"}}>
                  <h4><strong>Descripcion</strong></h4>
                  <p>{producto.descripcion}</p>
                </div>
                <hr/>
                <h5>Talle: {producto.talla}</h5>
                <h5>Marca: {producto.marca}</h5>
                <h5>categoria: {producto.categoria}</h5>
                <h5>Colores disponibles</h5>
                { 
                  colores.map(colores => (
                    <div className="form-check ">
                      <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {colores}
                      </label>
                    </div>
                  ))
                }
                <h4>Stock disponible: {stockProducto}</h4>
                <ItemCount max={producto.stock} onAdd={onAdd} initial={1} ProductosAgregados={productosagruegados} producto={producto}/>
                {
                  
                  // AGREGAR MODAL PARA ESTO
                  productosagruegados > 0 &&
                  <Modal/>
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

                }
                
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail