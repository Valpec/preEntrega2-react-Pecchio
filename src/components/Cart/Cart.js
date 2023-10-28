import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart =() => {
    const { cart, clearCart, cartQuantity, cartTotal} = useContext(CartContext)
    
    if(cartQuantity == 0) {
        return(
            <div className='cartVacio footerCart'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="botonCompra">Productos</Link>
            </div>
        )
    }
    return(
        <div>
            { cart.map(p => <CartItem key= {p.id} {...p}/>)}
            <div className='footerCart'>
            <button onClick={() => clearCart()} className="botonCompra">Limpiar Carrito</button>
            <h3>Total:${cartTotal}</h3>
            <Link to='/checkout' className="terminarCompra botonCompra">Checkout</Link>
            </div>
           
        </div>
    )
}

export default Cart