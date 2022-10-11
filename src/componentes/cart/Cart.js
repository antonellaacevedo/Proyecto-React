import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import '../cart/Cart.scss'

  

 export const Cart = () => {


    const {cart, precioTotal, vaciarCarrito, eliminarProducto} = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div className="carritovacio">
                <h3>
                    ¡Tu carrito está vacio!
                </h3>
                <Link className="iracomprar" to='/'>Ir a comprar</Link>
            </div>
        )
    }



    return(
        <div className="cart">
            <h2 className="carritotitulo">¡Estos son tus productos seleccionados!</h2>

            <div className="containerproductosencarrito"> 

            {
                cart.map((item) => (

                    

                    <div className="productosencarrito" key={item.id}>

                        <h2>{item.nombre}</h2>
                        <p>Precio: ${item.precio}</p>
                        <p>Cantidad:{item.cantidad}</p>
                        <button onClick={() => eliminarProducto(item.id)} className="eliminardelcarrito">X</button>
                        
  
                    </div>

                    
                ))

                
                
            }

            <h5 className="preciototal">Precio total: ${precioTotal()} </h5>
            <button  className="vaciarcarrito" onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link to="/checkout" className="finalizarcompra">Finalizar compra</Link>


            </div>

           



        </div>
    )
  }
