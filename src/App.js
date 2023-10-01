import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer.js/ItemDetailContainer';


import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <ItemListContainer greeting='Cargando...'/>
    //   {/* <ItemDetailContainer/> */}
    // </div>
     <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
