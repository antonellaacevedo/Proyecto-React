
import  ItemCount from '../itemcount/ItemCount'
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../itemdetail/ItemDetail.scss'
import '../checkout/Checkout.scss'


export const ItemDetail = ({item}) => {
    

   const {cart, addToCart, isInCart} = useContext(CartContext)
   console.log(cart)


    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {

        const itemToCard = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad,
        }
       
       addToCart(itemToCard)
    }

    return(

        <div className="contenedordetail">

            <div className='detailimg'>
              <img src={item.imagen} alt="productos"></img>
            </div>

            <div className='detailcontenido'>  

               <p className="ItemDetailprecio"> Precio: ${item.precio}</p>
               <p className="ItemDetailnombre">Nombre: {item.nombre}</p>
               <p>Stock disponible : {item.stock}</p>


               {isInCart(item.id)

               ?

               <div className='comprandodetail'>
                   <Link className='finalizarcompra' to='/Cart'>Finalizar compra</Link>
                   <Link className='continuarcompra' to='/'>Continuar comprando</Link>
               </div>
    
               :
               <ItemCount 
               counter={cantidad}  
               setCounter={setCantidad}
               max={item.stock}
               onnAdd={handleAgregar}
               />
               
               }
                
            
               
               

            </div>

        </div>

    )
}