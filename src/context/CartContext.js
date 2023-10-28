import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children })  => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}], console.log(item))
        }else {
            setCart(cart.map((product)=>{
                if(product.id === item.id){
                    return {...product, quantity: product.quantity + quantity}
                }else{
                    return product
                }
            }))
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cartQuantity = 
        cart.reduce((acc, curr) => {
            return acc + curr.quantity}, 0)
    

    const cartTotal = 
        cart.reduce((acc, curr) => {
            return acc + curr.precio}, 0)
    

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}