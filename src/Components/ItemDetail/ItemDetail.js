import { async } from '@firebase/util'
import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({producto}) => {

  const carritoContext = useContext(CartContext)
  // console.log('carritoContex' , carritoContext)

  console.log("producto", producto)
  
  
  const [productosagruegados, setProductosAgregados] = useState(0)
  const [stockProducto, setStockProducto] = useState(6)
  const [colores,setColores] = useState ([])
  
  useEffect (() => {
      setColores( producto.color)
  }, [producto.color])
  
  console.log("colores", colores)
  console.log("productos.color", producto.color)
  
  
  

  const onAdd = (quantityToAdd) => {
    setProductosAgregados(quantityToAdd);
    setStockProducto (stockProducto-quantityToAdd)
    carritoContext.addItem(producto,quantityToAdd)
  }
  
  return (
    <div className='container'>
        <div className='row justify-content-start '>
            <div className='col'>
              <img src={producto.img1} className='w-50 p-1' alt={producto.nombre}/>
              <img src={producto.img2} className='w-50 p-1' alt={producto.nombre} />
              <img src={producto.img3} className='w-50 p-1' alt={producto.nombre} />
              <img src={producto.img4} className='w-50 p-1' alt={producto.nombre} />
            </div>
        
            <div className='col'>
                <h2>{producto.nombre}</h2>
                
                <hr/>
                <h4>Descripcion</h4>
                <p>{producto.descripcion}</p>
                <hr/>
                <h5>Talle: {producto.talla}</h5>
                <h5>Marca: {producto.marca}</h5>

                { colores.length > 0 &&
                  colores.map(colores => (<button>{colores}</button>))
                }
                
                <h5>categoria: {producto.categoria}</h5>
                <h4>Stock disponible: {stockProducto}</h4>
                <ItemCount max={producto.stock} onAdd={onAdd} initial={1} ProductosAgregados={productosagruegados}/>
                {
                  
                  // AGREGAR MODAL PARA ESTO
                  productosagruegados > 0 &&
                  <div className='container'>
                    <hr/>
                    <div className='row '>
                      <div className='col ms-5'>
                        <Link to="/" className="btn btn-secondary">Seguir Comprando</Link>
                      </div>
                      <div className='col'>
                        <Link to="/Cart" className="btn btn-danger">Finalizar mis Compras</Link>
                      </div>
                    </div>
                  </div>

                }
                
            </div>
            
        </div>

    </div>
  )
}

export default ItemDetail