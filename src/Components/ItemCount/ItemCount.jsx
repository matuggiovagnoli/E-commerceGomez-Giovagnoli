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

            <button onClick={suma} type="button" className="btn btn-outline-primary btn-sm "> + </button>

            <span> {contador} </span>

            <button onClick={resta} type="button" className="btn btn-outline-primary btn-sm "> - </button>

            <div>

            <button type="button" className="btn btn-outline-primary btn-sm " onClick={() => {onAdd(contador)}} >agregar al carrito</button>

            </div>

        </div>
  )
};

export default ItemCount;