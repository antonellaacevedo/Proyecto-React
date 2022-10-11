import { Link } from 'react-router-dom'
import '../../componentes/item/Item.scss'

export const Item = ({producto}) => {

    

    return(

        <div className="contenedorcard">
           

            <div className="card">


                <img className="fotos" src={producto.imagen} alt="productos"/>

                <h4 className="nombre" > Nombre: {producto.nombre}</h4>
                <p className="precio"> Precio: $ {producto.precio}</p>
                <Link to={`/item/${producto.id}`} className="Linkadetalle">Ver más</Link>


            </div>

        
        </div>
    )

}

export default Item 