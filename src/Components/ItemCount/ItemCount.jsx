import {React, useState} from 'react';
import Modal from '../Modal/Modal';


const ItemCount = ({max, onAdd, initial, ProductosAgregados, producto, id}) => {

    const [contador,setContador] = useState(initial)
    // console.log("prodagregados", ProductosAgregados)
    

const suma = () => {
    if (contador < max){
        setContador (contador + 1)
    } 
};

const resta = () => {
    if (contador > 0){
        setContador (contador - 1)
    }
};

  return (
        
        <div className="container-sm d-flex justify-content-center ">

            <button onClick={suma} type="button" className="btn btn-outline-secondary "> + </button>

            <p className='m-2'> {contador} </p>

            <button onClick={resta} type="button" className="btn btn-outline-secondary "> - </button>

            <div>

            <button type="button" className="btn btn-outline-secondary mx-3" disabled={producto.stock===0} onClick={() => {onAdd(contador)}} data-bs-toggle="modal" data-bs-target={`#id${id}`}>agregar al carrito</button>
            <Modal id={`id${id}`} producto={producto} cantidad={contador}/>

            </div>

        </div>
  )
};

export default ItemCount;