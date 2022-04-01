import { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);

    // agregar cierta cantidad de un ítem al carrito
    const addItem = (producto, cantidad)=>{
        if (isInCart(producto.id)){
            const nuevosProductos = [...productosCarrito]
            const productoIndex = nuevosProductos.findIndex(prod => prod.producto.id === producto.id)
            nuevosProductos[productoIndex].cantidad = nuevosProductos[productoIndex].cantidad + cantidad;
            setProductosCarrito(nuevosProductos);
        }else{
        const nuevoProducto ={
            producto,
            cantidad
        }
        console.log("nuevoproducto", nuevoProducto)
        setProductosCarrito([...productosCarrito, nuevoProducto])
    }}

    // Remover un item del cart por usando su id
    const removeItem = (itemId)=>{
        //console.log("item id sutom: ", itemId)
        const productosNoEliminados = productosCarrito.filter(item => item.producto.id !==itemId)
        //console.log(productosNoEliminados)
        setProductosCarrito(productosNoEliminados)
    }

    // Remover todos los items
    const clear = ()=>{
        setProductosCarrito([])
    }

    // valida si un producto ya existe en el carrito
    const isInCart = (idInUse) =>{
        console.log("id idInUse", idInUse)
        return productosCarrito.some(item => item.producto.id === idInUse)
    }
        
    const getContadorDeItemsCarrito = () => {
        const sumaTotal = productosCarrito.reduce((acc,Item) => acc + Item.cantidad, 0)
        return sumaTotal;
        
    }

    const totalidadDePago = () => {
        const pagoTotal = productosCarrito.reduce((acc,prod) => acc+(prod.cantidad*prod.producto.precio), 0)
        return pagoTotal;
    }
    
    
    return(
        <CartContext.Provider value={{productosCarrito, addItem, removeItem, clear, isInCart, getContadorDeItemsCarrito, totalidadDePago}}>
            {children}
        </CartContext.Provider>
    )
}