import './App.scss'

import {AppRouter} from './router/appRouter'

import {CartProvider} from './context/CartContext'






function App() {

 


  return (


    <CartProvider>

      <AppRouter/>
    
    </CartProvider>
  );
}
export default App;
