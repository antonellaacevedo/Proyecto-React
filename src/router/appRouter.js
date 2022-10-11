import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import {  Navbar  } from '../componentes/navbar/Navbar.js'
import {ItemListContainer} from '../componentes/itemlistcontainer/ItemListContainer'
import { ItemDetailContainer } from '../componentes/itemdetailcontainer/ItemDetailContainer'
import {Banner} from '../componentes/banner/Banner.js'
import {Checkout} from '../componentes/checkout/Checkout'
import {Footer} from '../componentes/footer/Footer'
import { Cart } from '../componentes/cart/Cart'

 export const AppRouter = () => {


    return(


        <BrowserRouter>

        <Navbar/>
        <Banner greeting={"Le damos valor a tus imágenes"}/>
      

        <Routes>
          
          
          <Route path='/' element= { <ItemListContainer/>} />
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path='/checkout' element={ <Checkout/> } />
          <Route path='*' element={ <Navigate to="/"/> } />

        </Routes>

        <Footer/>






        </BrowserRouter>
    )
}