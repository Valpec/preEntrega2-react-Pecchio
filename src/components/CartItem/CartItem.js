import './CartItem.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({ categoria, nombre, precio, imagen, quantity, stock, id }) => {
    const {removeItem}= useContext(CartContext)

    return (
        <div className='itemCarrito'>
             <img src={imagen} alt={nombre} className='imgItem'></img> 
            <div className="zonaTexto">
               <h3 className='nomItem'>{nombre}</h3>
                <h6 className="catItemDetail">{categoria}</h6>
            </div>
            <h6 classnombre="precioItem"> Cantidad: {quantity} </h6>
            <div className='zonaPrecio'>
            <h6 classnombre="precioItem">Precio Unitario: ${precio} </h6>
            <h4 className='subtotalItem'>Subtotal: ${precio*quantity}</h4>
               
        </div>
            <button className='botonRemove' onClick={()=>removeItem(id)}>
                <img src='../img/icons/trash_can.png'/>
            </button>
        </div>

    )
}

export default CartItem