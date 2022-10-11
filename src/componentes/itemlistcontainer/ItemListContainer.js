
import '../../componentes/navbar/Navbar.scss'
import '../banner/Banner.scss'
import {ItemList} from "../itemlist/ItemList"
import {HashLoader} from 'react-spinners'
import '../itemlistcontainer/ItemListContainer.scss'
import { useProductos } from '../../hooks/useProductos'



    
  export const ItemListContainer = () => {

  const {productos,loading} = useProductos()

    return (
      <div  >

        {loading ? 
        <div className='carga'>
          <HashLoader className="loader22"
          color='#16A085' loading={loading} size={100}/>
        </div>
        : <ItemList productos={productos}/>}
             
      </div>
    )
        
}




