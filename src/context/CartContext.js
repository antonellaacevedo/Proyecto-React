import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'
import '../componentes/cart/Cart.scss'
import { useContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
      setCart([...cart, item])
    }
  
    const isInCart = (id) =>{
      return cart.some((item) => item.id === id)
    }
  
    const cantidadTotal =() =>{
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const precioTotal = () =>{
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const eliminarProducto = (id) => {
      setCart(cart.filter((item) => item.id !== id))
    }

    const vaciarCarrito = () => {

      Swal.fire({
        title: '¿Estás seguro/a?',
        text: "Deseo borrar todos los productos de mi carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
        }
      })

    }

    
  
  

    return(

        <CartContext.Provider value= {{
            cart,
            addToCart,
            isInCart,
            cantidadTotal,
            precioTotal,
            vaciarCarrito,
            eliminarProducto,
          }}
        
        >

        {children}

        </CartContext.Provider>
    )

}

export const useCartContext = () => {
return useContext(CartContext)
}