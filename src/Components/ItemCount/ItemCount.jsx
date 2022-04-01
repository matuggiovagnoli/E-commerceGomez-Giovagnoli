import {React, useState} from 'react';


const ItemCount = ({max, onAdd, initial}) => {

    const [contador,setContador] = useState(initial)
    

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

            <button type="button" className="btn btn-outline-secondary mx-3" onClick={() => {onAdd(contador)}} >agregar al carrito</button>

            </div>

        </div>
  )
};

export default ItemCount;