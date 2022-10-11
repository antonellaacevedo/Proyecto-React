
import { CardWidget } from '../../componentes/cardWitget/CardWitget';
import { Link } from 'react-router-dom';


 export const Navbar = () => {
    return(
    
    <header>
        <nav className="navbar">

          <CardWidget/>
          
          <div className="Links">
            <Link to='/'>Productos</Link>
            <Link to='/productos/rollos'>Rollos</Link>
            <Link to='/productos/camaras'>Cámaras</Link>
            <Link to='/productos/polaroid'>Polaroid</Link>
            
          </div>
          
          
        </nav>

      </header>
    )
    
}
