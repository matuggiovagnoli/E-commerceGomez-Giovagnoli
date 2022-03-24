import {React, useState} from 'react';


const ItemCount = ({max,contador,setContador}) => {

const [showCounter, setshowCounter] = useState(true)

const closeCounter = () => {
    setshowCounter (false)
}

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
      <>
            {
                showCounter &&
                    <div className="container-sm d-flex justify-content-center ">

                        <button onClick={suma} type="button" className="btn btn-outline-primary btn-sm "> + </button>

                        <span> {contador} </span>

                        <button onClick={resta} type="button" className="btn btn-outline-primary btn-sm "> - </button>

                        <div>

                        <button type="button" className="btn btn-outline-primary btn-sm " onClick={closeCounter}>agregar al carrito</button>

                        </div>

                    </div>
            }
    </>
  )
};

export default ItemCount;