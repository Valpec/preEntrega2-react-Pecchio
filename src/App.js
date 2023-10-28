import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer.js/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer greeting='Categoria: '/>} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
