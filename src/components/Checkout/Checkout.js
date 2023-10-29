import './Checkout.css'
import { useContext, useState } from 'react'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const { cart, cartTotal, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
      
            console.log('El carrito:',cart)
            console.log('total', cartTotal)
            let order = {
                user,
                product: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
                .then((response) => {
                    setOrderId(response.id)
                    clearCart()

                })
                .catch((error) => console.log(error))


    }
    console.log(user)
    return (
        <div>
            {orderId !== ''
                ? <div className='confirmacion'>
                    <h2>Felicitaciones! Orden generada exitosamente</h2>
                    <h4>Id de registro {orderId}</h4>
                </div>
                : <div className='formCheckout'>
                    <h2>Terminar compra:</h2>
                    <form className="contacto" onSubmit={finalizarCompra}>
                        <div>
                            <label className="formLabel">Nombre:</label>
                            <input className="formInput" onChange={datosComprador} type='text' placeholder="Nombre:" name="name" autoComplete="off" required />
                        </div>
                        <div>
                            <label className="formLabel">Apellido:</label>
                            <input className="formInput" onChange={datosComprador} type='text' placeholder="Apellido:" name="name" autoComplete="off" required />
                        </div>
                        <div>
                            <label className="formLabel">Email:</label>
                            <input className="formInput" onChange={datosComprador} type='text' placeholder="Email:" name="mail" autoComplete="off" required />
                        </div>
                        <div>
                            <label className="formLabel">Telefono:</label>
                            <input className="formInput" onChange={datosComprador} type='text' placeholder="Telefono:" name="phone" autoComplete="off" required />
                        </div>
                        <div>
                            <label className="formLabel">Confirmar Email:</label>
                            <input className="formInput" onChange={(e) => setValidateEmail(e.target.value)} type='text' placeholder="Confirmar Email:" name="mail" autoComplete="off" required />
                        </div>
                        <button className="botonCompra" type="submit" disabled={validateEmail !== user.mail} >Generar compra</button>
                    </form>
                </div>}
        </div>
    )
}
export default Checkout