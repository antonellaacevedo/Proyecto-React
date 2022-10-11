import '../../componentes/item/Item.scss'
import Item from '../item/Item'
            
export const ItemList = ({productos = [] } ) => {

    return (

        <div>
            <h2 className='Productosdisponibles'>
               PRODUCTOS DISPONIBLES
            </h2>

           <div className='Fondo'>
               {productos.map((prod) => 
            
               <Item producto={prod} key={prod.id}/>
            
               )}
    
            
             </div>

        </div>
    )
}
    


