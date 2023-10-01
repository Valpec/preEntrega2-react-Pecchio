import cart from '../assets/cart.svg';
import './CartWidget.css';
const CartWidget = () => {
    return (
        <div className='carritoNavbar'>
            <img src={cart} alt='Cart Widget'/>
            <span id="cantProdsCarrito">0</span>
        </div>
    )
}

export default CartWidget