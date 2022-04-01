import React, {useState} from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({producto}) => {

  const carritoContext = useContext(CartContext)
  console.log('carritoContex' , carritoContext)

  
  
  const [productosagruegados, setProductosAgregados] = useState(0)
  const [stockProducto, setStockProducto] = useState(6)
  
  

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
                <h5>Color: {producto.color}</h5>
                <h5>categoria: {producto.categoria}</h5>
                <h4>Stock disponible: {stockProducto}</h4>
                <ItemCount max={producto.stock} onAdd={onAdd} initial={1}/>
                {
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