import { useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, categoria, nombre, precio, imagen, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, nombre, precio, imagen, categoria
    }
    addItem(item, quantity)

  }
  
  return (

    <div className="itemDetail">
      <img src={imagen} alt={nombre} className='imgItem'></img>
      <div className="sideItemDetail">
        <h6>Producto:</h6>
        <h1 className="nombreItemDetail">{nombre}</h1>
        <h5 className="catItemDetail">{categoria}</h5>
        <h5 className="precioItemDetail">Precio Unitario: ${precio}</h5>
        <footer className="itemFooter">
         {quantityAdded > 0 ? (
            <Link to='/cart' className='terminarCompra botonCompra'>Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        } 
      </footer>
      </div>
      
    </div>

  )
}

export default ItemDetail