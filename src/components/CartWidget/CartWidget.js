import { useContext } from 'react';
import cart from '../assets/cart.svg';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)
    return (
            <div className='carritoNavbar'>
             <img src={cart} alt='Cart Widget'/>
             <span id="cantProdsCarrito" style={{ display: cartQuantity > 0 ? 'block' : 'none'}}>{cartQuantity}</span>
          </div>
         
    )
}
export default CartWidget