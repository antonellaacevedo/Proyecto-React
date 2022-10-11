import Logo from "../../assets/carts.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../cardWitget/CartWitget.scss'

export const CardWidget = () => {

    const {cantidadTotal, cart } = useContext (CartContext)

    return(

        <div>

            <Link className={`witget ${cart.length > 0 ? 'witget-visible' : ''}`} to='/cart'>

              <img src={Logo} alt="carrito"/>
              <span className="contadorwitget">{cantidadTotal()}</span>

            </Link>

        </div>

        
    )
        
        
    }


