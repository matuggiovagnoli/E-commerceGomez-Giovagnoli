import {React, useState} from 'react';


const ItemCount = ({stock,initial}) => {

const [contador,setContador] = useState(initial)

const suma = () => {
    if (contador < stock){
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

    <button type="button" className="btn btn-outline-primary btn-sm ">agregar al carrito</button>

    </div>
  )
};

export default ItemCount;